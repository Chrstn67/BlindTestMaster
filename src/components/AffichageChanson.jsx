"use client";

import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Download,
  Music,
  Info,
} from "lucide-react";
import "../styles/AffichageChanson.css";

const AffichageChanson = ({
  chanson,
  afficherTitre,
  afficherArtiste,
  afficherParoles,
  mancheActuelle,
  isModifiedAudio,
  onVerify = () => {}, // Fonction par défaut vide si non fournie
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isNormalPlaying, setIsNormalPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  const audioRef = useRef(null);
  const normalAudioRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (chanson) {
      const audio = audioRef.current;
      if (audio) {
        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);
        const handleEnded = () => setIsPlaying(false);

        audio.addEventListener("timeupdate", updateTime);
        audio.addEventListener("loadedmetadata", updateDuration);
        audio.addEventListener("ended", handleEnded);

        return () => {
          audio.removeEventListener("timeupdate", updateTime);
          audio.removeEventListener("loadedmetadata", updateDuration);
          audio.removeEventListener("ended", handleEnded);
        };
      }
    }
  }, [chanson]);

  useEffect(() => {
    if (normalAudioRef.current) {
      const handleNormalEnded = () => setIsNormalPlaying(false);
      normalAudioRef.current.addEventListener("ended", handleNormalEnded);

      return () => {
        if (normalAudioRef.current) {
          normalAudioRef.current.removeEventListener(
            "ended",
            handleNormalEnded
          );
        }
      };
    }
  }, [normalAudioRef.current]);

  // Réinitialiser l'état de vérification quand la chanson change
  useEffect(() => {
    setIsVerified(false);
  }, [chanson]);

  if (!chanson) return null;

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Si l'audio normal est en cours de lecture, le mettre en pause
        if (isNormalPlaying && normalAudioRef.current) {
          normalAudioRef.current.pause();
          setIsNormalPlaying(false);
        }

        audioRef.current
          .play()
          .catch((error) =>
            console.error("Erreur lors de la lecture audio:", error)
          );
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleNormalPlay = () => {
    if (normalAudioRef.current) {
      if (isNormalPlaying) {
        normalAudioRef.current.pause();
      } else {
        // Si l'audio principal est en cours de lecture, le mettre en pause
        if (isPlaying && audioRef.current) {
          audioRef.current.pause();
          setIsPlaying(false);
        }

        normalAudioRef.current
          .play()
          .catch((error) =>
            console.error("Erreur lors de la lecture audio normal:", error)
          );
      }
      setIsNormalPlaying(!isNormalPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      if (normalAudioRef.current) {
        normalAudioRef.current.muted = !isMuted;
      }
      setIsMuted(!isMuted);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = chanson.audioUrl;
    a.download = `${chanson.artiste} - ${chanson.titre}.mp3`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleProgressBarClick = (e) => {
    if (audioRef.current && duration) {
      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const clickPosition = (e.clientX - rect.left) / rect.width;
      const newTime = clickPosition * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleProgressBarDrag = (e) => {
    if (progressBarRef.current && audioRef.current && duration) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const clickPosition = Math.max(
        0,
        Math.min(1, (e.clientX - rect.left) / rect.width)
      );
      const newTime = clickPosition * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleMouseDown = (e) => {
    handleProgressBarClick(e);

    const handleMouseMove = (e) => {
      handleProgressBarDrag(e);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Fonction pour vérifier la chanson (remplace la logique dans Jeu.jsx)
  const verifierChanson = () => {
    setIsVerified(true);

    // Notifier le composant parent
    onVerify(chanson);

    // Animation CSS
    const infoElement = document.querySelector(".normal-audio-info");
    if (infoElement) {
      infoElement.classList.add("verified");
      setTimeout(() => {
        infoElement.classList.remove("verified");
      }, 1000);
    }
  };

  // Déterminer le titre de la manche pour l'affichage
  const getMancheTitle = () => {
    switch (mancheActuelle) {
      case 2:
        return "Version inversée";
      case 3:
        return "Version modifiée";
      default:
        return "";
    }
  };

  return (
    <div className="affichage-chanson">
      <audio
        ref={audioRef}
        src={chanson.audioUrl}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="chanson-info">
        {afficherTitre && <h2 className="chanson-titre">{chanson.titre}</h2>}
        {afficherArtiste && (
          <h3 className="chanson-artiste">{chanson.artiste}</h3>
        )}

        <div className="chanson-player">
          {isModifiedAudio && (
            <div className="player-badge">{getMancheTitle()}</div>
          )}
          <div className="player-controls">
            <button
              className="control-button play-pause"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause" : "Lecture"}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>

            <div className="progress-container">
              <div className="time current-time">{formatTime(currentTime)}</div>
              <div
                className="progress-bar"
                ref={progressBarRef}
                onClick={handleProgressBarClick}
                onMouseDown={handleMouseDown}
              >
                <div
                  className="progress-fill"
                  style={{
                    width: `${duration ? (currentTime / duration) * 100 : 0}%`,
                  }}
                ></div>
              </div>
              <div className="time duration">{formatTime(duration)}</div>
            </div>

            <button
              className="control-button mute"
              onClick={toggleMute}
              aria-label={isMuted ? "Activer le son" : "Couper le son"}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>

            <button
              className="control-button download"
              onClick={handleDownload}
              aria-label="Télécharger"
            >
              <Download size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Lecteur de la version normale pour les manches 2 et 3 */}
      {isModifiedAudio && (
        <div className="normal-audio-player">
          <div className="normal-player-header">
            <h4>Version normale</h4>
            <div className="normal-player-actions">
              <button
                className={`normal-play-button ${
                  isNormalPlaying ? "playing" : ""
                }`}
                onClick={toggleNormalPlay}
              >
                {isNormalPlaying ? <Pause size={16} /> : <Play size={16} />}
                <span>{isNormalPlaying ? "Pause" : "Écouter"}</span>
              </button>

              {!isVerified && (
                <button className="verify-button" onClick={verifierChanson}>
                  <Info size={16} />
                  <span>Vérifier</span>
                </button>
              )}
            </div>
          </div>
          <audio
            ref={normalAudioRef}
            src={chanson.audioUrl}
            onEnded={() => setIsNormalPlaying(false)}
            className="hidden-audio"
          />
          <div className="normal-audio-info">
            <Music size={20} />
            <span>
              {isVerified
                ? `Titre: ${chanson.titre} - Artiste: ${chanson.artiste}`
                : "Écoutez la version originale pour comparer"}
            </span>
          </div>
        </div>
      )}

      {afficherParoles && chanson.paroles && (
        <div className="chanson-paroles">
          <h4>Paroles</h4>
          <div className="paroles-content">
            {chanson.paroles.split("\n").map((line, index) => (
              <p key={index}>{line || <br />}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AffichageChanson;
