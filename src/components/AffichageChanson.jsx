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
  X,
  FileText,
  Rewind,
  FastForward,
} from "lucide-react";
import "../styles/AffichageChanson.css";

const AffichageChanson = ({
  chanson,
  afficherTitre,
  afficherArtiste,
  afficherParoles,
  mancheActuelle,
  isModifiedAudio,
  isOpen = true, // Default to true for backward compatibility
  onClose = () => {}, // Default empty function
  onVerify = () => {}, // Fonction par défaut vide si non fournie
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isNormalPlaying, setIsNormalPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  const [showParoles, setShowParoles] = useState(afficherParoles);
  const audioRef = useRef(null);
  const normalAudioRef = useRef(null);
  const progressBarRef = useRef(null);

  // Mettre à jour l'état local quand la prop change
  useEffect(() => {
    setShowParoles(afficherParoles);
  }, [afficherParoles]);

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

  // Fonction pour avancer de 10 secondes
  const forwardAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(
        audioRef.current.duration,
        audioRef.current.currentTime + 10
      );
    }
  };

  // Fonction pour reculer de 10 secondes
  const rewindAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(
        0,
        audioRef.current.currentTime - 10
      );
    }
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

  // Toggle pour afficher/masquer les paroles
  const toggleParoles = () => {
    setShowParoles(!showParoles);
  };

  return (
    <div className={`affichage-chanson ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <button className="modal-close-btn" onClick={onClose}>
          <X size={18} />
        </button>

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
                className="control-button rewind"
                onClick={rewindAudio}
                aria-label="Reculer de 10 secondes"
              >
                <Rewind size={20} />
              </button>

              <button
                className="control-button play-pause"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Lecture"}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>

              <button
                className="control-button forward"
                onClick={forwardAudio}
                aria-label="Avancer de 10 secondes"
              >
                <FastForward size={20} />
              </button>

              <div className="progress-container">
                <div className="time current-time">
                  {formatTime(currentTime)}
                </div>
                <div
                  className="progress-bar"
                  ref={progressBarRef}
                  onClick={handleProgressBarClick}
                  onMouseDown={handleMouseDown}
                >
                  <div
                    className="progress-fill"
                    style={{
                      width: `${
                        duration ? (currentTime / duration) * 100 : 0
                      }%`,
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

        {/* Boutons d'action pour télécharger et afficher les paroles */}
        <div className="modal-actions">
          <button
            className="modal-action-btn download"
            onClick={handleDownload}
          >
            <Download size={18} />
            <span>Télécharger la chanson</span>
          </button>

          <button className="modal-action-btn lyrics" onClick={toggleParoles}>
            <FileText size={18} />
            <span>
              {showParoles ? "Masquer les paroles" : "Afficher les paroles"}
            </span>
          </button>
        </div>

        {/* Section des paroles */}
        {showParoles && chanson.paroles && (
          <div className="chanson-paroles">
            <h4>
              <FileText size={18} />
              Paroles
            </h4>
            <div className="paroles-content">
              {chanson.paroles.split("\n").map((line, index) => (
                <p key={index}>{line || <br />}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AffichageChanson;
