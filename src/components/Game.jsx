"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "next/link";
import {
  Play,
  Pause,
  SkipForward,
  Music,
  Home,
  Volume2,
  VolumeX,
} from "lucide-react";
import RoundInfo from "./round-info";
import SongDisplay from "./song-display";
import { rounds, songs } from "../data/data";
import "../styles/Game.css";

const Game = () => {
  const [currentRound, setCurrentRound] = useState(1);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playedSongs, setPlayedSongs] = useState([]);
  const [audioEffectApplied, setAudioEffectApplied] = useState(false);
  const [reversedBuffer, setReversedBuffer] = useState(null);
  const [audioVolume, setAudioVolume] = useState(1);
  const [playTriggered, setPlayTriggered] = useState(false);

  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const sourceNodeRef = useRef(null);
  const bufferSourceRef = useRef(null);
  const gainNodeRef = useRef(null);

  const currentRoundData = rounds.find((round) => round.id === currentRound);

  // Function to get a random unplayed song for the current round
  const getRandomSong = () => {
    const availableSongs = songs.filter(
      (song) => song.roundId === currentRound && !playedSongs.includes(song.id)
    );

    if (availableSongs.length === 0) {
      const nextRound = findNextRound();
      if (nextRound) {
        setCurrentRound(nextRound);
        return null;
      } else {
        alert("All songs have been played! The game will restart.");
        setPlayedSongs([]);
        return songs.find((song) => song.roundId === 1);
      }
    }

    const randomIndex = Math.floor(Math.random() * availableSongs.length);
    return availableSongs[randomIndex];
  };

  // Function to find the next round with unplayed songs
  const findNextRound = () => {
    for (let i = 1; i <= rounds.length; i++) {
      if (i !== currentRound) {
        const availableSongs = songs.filter(
          (song) => song.roundId === i && !playedSongs.includes(song.id)
        );
        if (availableSongs.length > 0) {
          return i;
        }
      }
    }
    return null;
  };

  // Function to stop reversed audio playback
  const stopReversedAudio = () => {
    if (bufferSourceRef.current) {
      try {
        bufferSourceRef.current.stop();
      } catch (error) {
        // Ignore errors if already stopped
      }
      bufferSourceRef.current = null;
    }
  };

  // Function to start reversed audio playback
  const playReversedAudio = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext ||
          window.webkitAudioContext)();
      }

      if (audioContextRef.current && reversedBuffer) {
        console.log("Starting reversed buffer playback");

        stopReversedAudio();

        const bufferSource = audioContextRef.current.createBufferSource();
        bufferSource.buffer = reversedBuffer;

        const gainNode = audioContextRef.current.createGain();
        gainNode.gain.value = isMuted ? 0 : audioVolume;
        gainNodeRef.current = gainNode;

        bufferSource.connect(gainNode);
        gainNode.connect(audioContextRef.current.destination);

        bufferSourceRef.current = bufferSource;

        bufferSource.start();
        console.log("Reversed playback started successfully");
        return true;
      } else {
        console.error(
          "Unable to start reversed playback: missing audio context or buffer"
        );
        return false;
      }
    } catch (error) {
      console.error("Error during reversed playback:", error);
      return false;
    }
  };

  // Function to handle play/pause
  const togglePlay = useCallback(() => {
    console.log(
      "togglePlay called, round:",
      currentRound,
      "reversedBuffer:",
      !!reversedBuffer
    );

    if (currentRound === 2) {
      console.log("Round 2 (Distorted) - using reversed audio mode");

      if (isPlaying) {
        console.log("Stopping reversed playback");
        stopReversedAudio();
        setIsPlaying(false);
      } else {
        console.log("Starting reversed playback");

        if (!reversedBuffer || !playTriggered) {
          console.log("First click or buffer not ready, preparing audio...");
          setPlayTriggered(true);

          if (!audioEffectApplied && currentSong) {
            prepareReversedAudio(currentSong.audioUrl).then((success) => {
              if (success && playTriggered) {
                const played = playReversedAudio();
                if (played) setIsPlaying(true);
              }
            });
          } else if (reversedBuffer) {
            const played = playReversedAudio();
            if (played) setIsPlaying(true);
          }
        } else {
          const played = playReversedAudio();
          if (played) setIsPlaying(true);
        }
      }
    } else {
      console.log("Standard round - using normal audio");
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Error during audio playback:", error);
          });
      }
    }
  }, [
    isPlaying,
    currentRound,
    reversedBuffer,
    audioEffectApplied,
    currentSong,
    playTriggered,
  ]);

  const nextSong = () => {
    if (currentSong) {
      setPlayedSongs((prev) => [...prev, currentSong.id]);
    }

    if (currentRound === 2 && bufferSourceRef.current) {
      stopReversedAudio();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }

    setIsPlaying(false);
    setShowAnswer(false);
    setShowLyrics(false);
    setAudioEffectApplied(false);
    setReversedBuffer(null);
    setPlayTriggered(false);

    cleanupAudioConnections();
  };

  const toggleMute = () => {
    if (currentRound === 2 && gainNodeRef.current) {
      gainNodeRef.current.gain.value = isMuted ? audioVolume : 0;
    } else if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }

    setIsMuted(!isMuted);
  };

  // Function to clean up audio connections
  const cleanupAudioConnections = () => {
    try {
      stopReversedAudio();

      if (sourceNodeRef.current) {
        sourceNodeRef.current.disconnect();
        sourceNodeRef.current = null;
      }

      if (gainNodeRef.current) {
        gainNodeRef.current.disconnect();
        gainNodeRef.current = null;
      }

      if (
        audioContextRef.current &&
        audioContextRef.current.state !== "closed"
      ) {
        audioContextRef.current.close().catch((error) => {
          console.error("Error closing AudioContext:", error);
        });
        audioContextRef.current = null;
      }
    } catch (error) {
      console.error("Error during audio connections cleanup:", error);
    }
  };

  // Function to prepare reversed audio
  const prepareReversedAudio = async (audioUrl) => {
    try {
      console.log("Preparing reversed audio for:", audioUrl);

      cleanupAudioConnections();

      audioContextRef.current = new (window.AudioContext ||
        window.webkitAudioContext)();

      const response = await fetch(audioUrl);
      if (!response.ok) {
        throw new Error(`Error loading audio: ${response.status}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      if (!arrayBuffer || arrayBuffer.byteLength === 0) {
        throw new Error("Empty audio buffer");
      }

      console.log("Audio loaded, size:", arrayBuffer.byteLength);

      const audioBuffer = await audioContextRef.current.decodeAudioData(
        arrayBuffer
      );
      console.log("Audio decoded, duration:", audioBuffer.duration, "seconds");

      const newBuffer = audioContextRef.current.createBuffer(
        audioBuffer.numberOfChannels,
        audioBuffer.length,
        audioBuffer.sampleRate
      );

      for (let channel = 0; channel < audioBuffer.numberOfChannels; channel++) {
        const channelData = audioBuffer.getChannelData(channel);
        const reversedData = newBuffer.getChannelData(channel);

        for (let i = 0; i < channelData.length; i++) {
          reversedData[i] = channelData[channelData.length - 1 - i];
        }
      }

      console.log("Reversed buffer created successfully");
      setReversedBuffer(newBuffer);
      setAudioEffectApplied(true);

      return true;
    } catch (error) {
      console.error("Error preparing reversed audio:", error);
      return false;
    }
  };

  // Clean up audio resources when component unmounts
  useEffect(() => {
    return () => {
      cleanupAudioConnections();
    };
  }, []);

  // Effect to select a random song when the round changes or when moving to the next song
  useEffect(() => {
    const newSong = getRandomSong();
    setCurrentSong(newSong);
  }, [currentRound, playedSongs.length]);

  // Effect to handle audio when the song changes
  useEffect(() => {
    if (!currentSong) return;

    console.log("Song change detected, round:", currentRound);

    if (audioRef.current) {
      audioRef.current.pause();
    }
    stopReversedAudio();

    setIsPlaying(false);
    setAudioEffectApplied(false);
    setReversedBuffer(null);
    setPlayTriggered(false);

    cleanupAudioConnections();

    if (currentRound === 2) {
      console.log(
        "Round 2 (Distorted) - preparing reversed audio for new song"
      );
      prepareReversedAudio(currentSong.audioUrl);
    } else {
      console.log("Standard round - loading normal audio");
      if (audioRef.current) {
        audioRef.current.src = currentSong.audioUrl;
        audioRef.current.load();
        setAudioEffectApplied(true);
      }
    }
  }, [currentSong, currentRound]);

  // Effect to clean up audio connections when changing rounds
  useEffect(() => {
    console.log("Round change detected, new round:", currentRound);
    setAudioEffectApplied(false);
    setReversedBuffer(null);
    setPlayTriggered(false);
    cleanupAudioConnections();

    if (currentRound === 2 && currentSong) {
      console.log(
        "Switching to Round 2 (Distorted) with a song already loaded"
      );
      prepareReversedAudio(currentSong.audioUrl);
    }
  }, [currentRound]);

  // Handle round change
  const changeRound = (roundId) => {
    setCurrentRound(roundId);
    setIsPlaying(false);
    setShowAnswer(false);
    setShowLyrics(false);
    setPlayTriggered(false);
  };

  return (
    <main className="game">
      <audio ref={audioRef} />

      <header className="game-header">
        <Link href="/" className="home-link">
          <Home size={24} />
        </Link>
        <h1>BlindTest Master</h1>
        <Music className="logo" size={32} />
      </header>

      <RoundInfo round={currentRoundData} />

      <section className="game-content">
        {currentSong ? (
          <>
            <div className="player-controls">
              <button
                className="control-button play-pause"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={32} /> : <Play size={32} />}
              </button>

              <button
                className="control-button next"
                onClick={nextSong}
                aria-label="Next song"
              >
                <SkipForward size={32} />
              </button>

              <button
                className="control-button mute"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
            </div>

            {(currentRound === 1 || currentRound === 2) && (
              <div className="guess-mode">
                {showAnswer ? (
                  <SongDisplay
                    song={currentSong}
                    showTitle={true}
                    showArtist={true}
                    showLyrics={showLyrics}
                  />
                ) : (
                  <div className="hidden-answer">
                    <p>?????</p>
                  </div>
                )}
                <div className="action-buttons">
                  <button
                    className="answer-toggle"
                    onClick={() => setShowAnswer(!showAnswer)}
                  >
                    {showAnswer ? "Hide Answer" : "Reveal Answer"}
                  </button>
                  {showAnswer && (
                    <button
                      className="lyrics-toggle"
                      onClick={() => setShowLyrics(!showLyrics)}
                    >
                      {showLyrics ? "Hide Lyrics" : "Show Lyrics"}
                    </button>
                  )}
                </div>
              </div>
            )}

            {currentRound === 3 && (
              <div className="scenario-mode">
                <div className="scenario-container">
                  <h3>Scenario Mode</h3>
                  <p>
                    The host should act out or describe the song without singing
                    or humming.
                  </p>
                  {showAnswer ? (
                    <SongDisplay
                      song={currentSong}
                      showTitle={true}
                      showArtist={true}
                      showLyrics={showLyrics}
                    />
                  ) : (
                    <div className="hidden-answer">
                      <p>Act out the scenario for this song!</p>
                    </div>
                  )}
                </div>
                <div className="action-buttons">
                  <button
                    className="answer-toggle"
                    onClick={() => setShowAnswer(!showAnswer)}
                  >
                    {showAnswer ? "Hide Answer" : "Reveal Answer"}
                  </button>
                  {showAnswer && (
                    <button
                      className="lyrics-toggle"
                      onClick={() => setShowLyrics(!showLyrics)}
                    >
                      {showLyrics ? "Hide Lyrics" : "Show Lyrics"}
                    </button>
                  )}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="no-songs-message">
            <p>No songs available for this round.</p>
            <p>Move to another round or add more songs.</p>
          </div>
        )}
      </section>

      <footer className="game-footer">
        <div className="round-navigation">
          {rounds.map((round) => (
            <button
              key={round.id}
              className={`round-button ${
                currentRound === round.id ? "active" : ""
              }`}
              onClick={() => changeRound(round.id)}
            >
              <span className="round-number">{round.id}</span>
              <span className="round-emoji">{round.emoji}</span>
            </button>
          ))}
        </div>

        <div className="songs-played-info">
          <p>
            Songs played: {playedSongs.length} / {songs.length}
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Game;
