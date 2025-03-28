"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  Pause,
  SkipForward,
  Music,
  Home,
  Volume2,
  VolumeX,
  Rewind,
  FastForward,
  Timer,
  TimerOff,
  TimerReset,
} from "lucide-react";
import InfoManche from "./InfoManche";
import AffichageChanson from "./AffichageChanson";
import TeamManager from "./TeamManager";
import AudioEffectsController from "./AudioEffectsController";
import { manches, chansons } from "../data/data";
import "../styles/Jeu.css";
import ReglesDuJeu from "./Regles";

const MAX_SONGS_PER_ROUND = 30;

const Jeu = () => {
  const [mancheActuelle, setMancheActuelle] = useState(1);
  const [chansonActuelle, setChansonActuelle] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [afficherParoles, setAfficherParoles] = useState(false);
  const [afficherReponse, setAfficherReponse] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [chansonsJouees, setChansonsJouees] = useState([]);
  const [chansonsJoueesParManche, setChansonsJoueesParManche] = useState({
    1: [],
    2: [],
    3: [],
  });
  const [audioEffectApplied, setAudioEffectApplied] = useState(false);
  const [reversedBuffer, setReversedBuffer] = useState(null);
  const [monstreBuffer, setMonstreBuffer] = useState(null);
  const [audioVolume, setAudioVolume] = useState(1);
  const [playTriggered, setPlayTriggered] = useState(false);
  const [teams, setTeams] = useState([]);
  const [lastPlayedSongId, setLastPlayedSongId] = useState(null);
  const [audioEffectsExpanded, setAudioEffectsExpanded] = useState(false);
  const [audioEffectsParams, setAudioEffectsParams] = useState({
    distortion: 10000,
    pitchShift: 0.6,
    wahFrequency: 2,
    wahDepth: 0.6,
    growlAmount: 0.05,
  });

  const colors = [
    "#6c5ce7", // Violet
    "#e84393", // Rose
    "#00b894", // Vert
    "#fdcb6e", // Jaune
    "#e17055", // Orange
    "#0984e3", // Bleu
    "#6c5ce7", // Violet
    "#00cec9", // Turquoise
  ];

  // État du chronomètre
  const [chronoEtats, setChronoEtats] = useState({
    tempsEcoule: 0,
    actif: false,
    termine: false,
    dernierTemps: Date.now(), // Ajout d'un timestamp pour calculer le temps écoulé
  });

  const audioRef = useRef(null);
  const audioContextRef = useRef(null);
  const sourceNodeRef = useRef(null);
  const bufferSourceRef = useRef(null);
  const gainNodeRef = useRef(null);
  const timerRef = useRef(null);
  const audioPositionRef = useRef(0);

  const donneesMancheActuelle = manches.find(
    (manche) => manche.id === mancheActuelle
  );

  // Accès aux données du chronomètre
  const tempsEcoule = chronoEtats.tempsEcoule;
  const chronoActif = chronoEtats.actif;
  const chronoTermine = chronoEtats.termine;

  // Fonction pour obtenir une chanson aléatoire non jouée
  const obtenirChansonAleatoire = () => {
    // Filtrer les chansons qui n'ont pas été jouées dans aucune manche
    const chansonsDisponibles = chansons.filter(
      (chanson) =>
        !chansonsJouees.includes(chanson.id) && chanson.id !== lastPlayedSongId // Éviter de répéter la dernière chanson jouée
    );

    if (chansonsDisponibles.length === 0) {
      alert("Toutes les chansons ont été jouées ! Le jeu va recommencer.");
      setChansonsJouees([]);
      setChansonsJoueesParManche({
        1: [],
        2: [],
        3: [],
      });
      setLastPlayedSongId(null);

      // Sélectionner une chanson qui n'est pas la dernière jouée
      const chansonsPossibles = chansons.filter(
        (chanson) => chanson.id !== lastPlayedSongId
      );
      const indexAleatoire = Math.floor(
        Math.random() * chansonsPossibles.length
      );
      return chansonsPossibles[indexAleatoire];
    }

    const indexAleatoire = Math.floor(
      Math.random() * chansonsDisponibles.length
    );
    return chansonsDisponibles[indexAleatoire];
  };

  // Fonction pour vérifier si la manche doit changer
  const verifierChangementManche = useCallback(() => {
    const chansonsJoueesDansManche = chansonsJoueesParManche[mancheActuelle];

    if (chansonsJoueesDansManche.length >= MAX_SONGS_PER_ROUND) {
      // Passer à la manche suivante
      const prochaineManche = mancheActuelle < 3 ? mancheActuelle + 1 : 1;
      setMancheActuelle(prochaineManche);
      return true;
    }

    return false;
  }, [mancheActuelle, chansonsJoueesParManche]);

  // Fonction pour arrêter la lecture du buffer modifié
  const stopModifiedAudio = () => {
    if (bufferSourceRef.current) {
      try {
        bufferSourceRef.current.stop();
      } catch (error) {
        // Ignorer les erreurs si déjà arrêté
      }
      bufferSourceRef.current = null;
    }
  };

  // Remplacer la fonction playModifiedAudio par cette version qui utilise des nœuds d'effets en temps réel
  const playModifiedAudio = () => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext ||
          window.webkitAudioContext)();
      }

      const buffer = mancheActuelle === 2 ? reversedBuffer : monstreBuffer;

      if (audioContextRef.current && buffer) {
        console.log(
          `Démarrage de la lecture du buffer ${
            mancheActuelle === 2 ? "inversé" : "monstre"
          }`
        );

        stopModifiedAudio();

        const bufferSource = audioContextRef.current.createBufferSource();
        bufferSource.buffer = buffer;

        // Initialiser le playbackRate en fonction du pitch
        if (mancheActuelle === 3) {
          let playbackRate = 1.0;
          const { pitchShift } = audioEffectsParams;

          if (pitchShift < 0.5) {
            // Effet très grave
            playbackRate = 0.4;
          } else if (pitchShift < 1) {
            // Effet grave
            playbackRate = 0.6;
          } else if (pitchShift > 2) {
            // Effet chipmunk
            playbackRate = 2.5;
          } else {
            // Effet légèrement aigu
            playbackRate = 1.5;
          }

          bufferSource.playbackRate.value = playbackRate;
        }

        // Créer les nœuds d'effets pour la manche 3 (monstre)
        let outputNode;

        if (mancheActuelle === 3) {
          // Créer les nœuds d'effets
          const {
            distortion,
            pitchShift,
            wahFrequency,
            wahDepth,
            growlAmount,
          } = audioEffectsParams;

          // Nœud de gain principal
          const gainNode = audioContextRef.current.createGain();
          gainNode.gain.value = isMuted ? 0 : audioVolume;
          gainNodeRef.current = gainNode;

          // Nœud de distorsion
          const distortionNode = audioContextRef.current.createWaveShaper();
          const distortionCurve = createDistortionCurve(distortion);
          distortionNode.curve = distortionCurve;
          distortionNode.oversample = "4x";

          // Nœud de filtre pour le wah-wah
          const filterNode = audioContextRef.current.createBiquadFilter();
          filterNode.type = "bandpass";
          filterNode.frequency.value = 1000;
          filterNode.Q.value = 3; // Réduit de 5 à 3 pour un effet moins prononcé

          // Oscillateur pour moduler le filtre wah-wah
          const oscillator = audioContextRef.current.createOscillator();
          oscillator.type = "sine";
          oscillator.frequency.value = wahFrequency;

          const oscillatorGain = audioContextRef.current.createGain();
          oscillatorGain.gain.value = wahDepth * 800; // Réduit de 1500 à 800

          oscillator.connect(oscillatorGain);
          oscillatorGain.connect(filterNode.frequency);
          oscillator.start();

          // Stocker les références pour pouvoir les modifier plus tard
          sourceNodeRef.current = {
            distortionNode,
            filterNode,
            oscillator,
            oscillatorGain,
            pitchShift,
            growlAmount,
          };

          // Connecter les nœuds
          bufferSource.connect(filterNode);
          filterNode.connect(distortionNode);
          distortionNode.connect(gainNode);
          gainNode.connect(audioContextRef.current.destination);

          outputNode = gainNode;
        } else {
          // Pour la manche 2 (inversé), utiliser simplement un nœud de gain
          const gainNode = audioContextRef.current.createGain();
          gainNode.gain.value = isMuted ? 0 : audioVolume;
          gainNodeRef.current = gainNode;

          bufferSource.connect(gainNode);
          gainNode.connect(audioContextRef.current.destination);

          outputNode = gainNode;
        }

        // Stocker le temps de démarrage pour les calculs futurs
        const startPosition = isFinite(audioPositionRef.current)
          ? audioPositionRef.current
          : 0;

        // S'assurer que la position de départ est valide
        if (startPosition >= buffer.duration) {
          audioPositionRef.current = 0;
          bufferSource.start(0, 0);
        } else {
          bufferSource.start(0, startPosition);
        }

        // Stocker la référence au nœud source et le temps de démarrage
        bufferSourceRef.current = bufferSource;
        bufferSourceRef.current.startTime = audioContextRef.current.currentTime;
        bufferSourceRef.current.startOffset = startPosition;

        console.log(
          `Lecture ${
            mancheActuelle === 2 ? "inversée" : "monstre"
          } démarrée avec succès à la position ${startPosition}s`
        );

        return true;
      } else {
        console.error(
          `Impossible de démarrer la lecture: contexte audio ou buffer manquant`
        );
        return false;
      }
    } catch (error) {
      console.error("Erreur lors de la lecture audio modifiée:", error);
      return false;
    }
  };

  // Fonction pour gérer la lecture/pause
  const togglePlay = useCallback(() => {
    console.log("togglePlay appelé, manche:", mancheActuelle);

    // Si nous sommes en manche 2 (inversé) ou manche 3 (monstre)
    if (mancheActuelle === 2 || mancheActuelle === 3) {
      console.log(
        `Manche ${mancheActuelle} - utilisation du mode audio modifié`
      );

      if (isPlaying) {
        console.log("Arrêt de la lecture modifiée");
        // Sauvegarder la position actuelle
        if (bufferSourceRef.current && audioContextRef.current) {
          try {
            // Calculer le temps écoulé depuis le début de la lecture
            if (
              bufferSourceRef.current.startTime !== undefined &&
              bufferSourceRef.current.startOffset !== undefined
            ) {
              const elapsedTime =
                audioContextRef.current.currentTime -
                bufferSourceRef.current.startTime;
              const newPosition =
                bufferSourceRef.current.startOffset + elapsedTime;

              // Vérifier que la nouvelle position est valide
              if (isFinite(newPosition) && newPosition >= 0) {
                audioPositionRef.current = newPosition;
                console.log(
                  "Position audio sauvegardée:",
                  audioPositionRef.current
                );
              }
            }
          } catch (error) {
            console.error("Erreur lors du calcul de la position audio:", error);
            // En cas d'erreur, ne pas modifier la position
          }
        }
        stopModifiedAudio();
        setIsPlaying(false);

        // Arrêter le chronomètre quand on met en pause
        arreterChrono();
      } else {
        console.log("Démarrage de la lecture modifiée");

        // Si le buffer n'est pas encore prêt ou si c'est le premier clic
        if (
          (!reversedBuffer && mancheActuelle === 2) ||
          (!monstreBuffer && mancheActuelle === 3) ||
          !playTriggered
        ) {
          console.log(
            "Premier clic ou buffer non prêt, préparation de l'audio..."
          );
          setPlayTriggered(true);

          if (!audioEffectApplied && chansonActuelle) {
            const prepareFunction =
              mancheActuelle === 2
                ? preparerAudioInverse
                : preparerAudioMonstre;
            prepareFunction(chansonActuelle.audioUrl).then((success) => {
              if (success && playTriggered) {
                const played = playModifiedAudio();
                if (played) {
                  setIsPlaying(true);
                  if (!chronoActif && !chronoTermine) {
                    demarrerChrono();
                  } else if (!chronoTermine) {
                    // Reprendre le chronomètre s'il était en pause
                    reprendreChrono();
                  }
                }
              }
            });
          } else if (
            (mancheActuelle === 2 && reversedBuffer) ||
            (mancheActuelle === 3 && monstreBuffer)
          ) {
            // Si les effets ont été modifiés en manche 3, recréer le buffer avec les nouveaux paramètres
            if (mancheActuelle === 3 && chansonActuelle && audioEffectsParams) {
              // Appliquer les nouveaux effets au buffer existant
              const newBuffer = appliquerEffetsAudio(
                monstreBuffer,
                audioEffectsParams
              );
              setMonstreBuffer(newBuffer);
            }

            const played = playModifiedAudio();
            if (played) {
              setIsPlaying(true);
              if (!chronoActif && !chronoTermine) {
                demarrerChrono();
              } else if (!chronoTermine) {
                // Reprendre le chronomètre s'il était en pause
                reprendreChrono();
              }
            }
          }
        } else {
          // Si les effets ont été modifiés en manche 3, recréer le buffer avec les nouveaux paramètres
          if (mancheActuelle === 3 && chansonActuelle && audioEffectsParams) {
            // Nous utilisons directement le buffer existant avec les paramètres mis à jour
          }

          const played = playModifiedAudio();
          if (played) {
            setIsPlaying(true);
            if (!chronoActif && !chronoTermine) {
              demarrerChrono();
            } else if (!chronoTermine) {
              // Reprendre le chronomètre s'il était en pause
              reprendreChrono();
            }
          }
        }
      }
    } else {
      // Comportement normal pour les autres manches
      console.log("Manche standard - utilisation de l'audio normal");
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);

        // Arrêter le chronomètre quand on met en pause
        arreterChrono();
      } else {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            if (!chronoActif && !chronoTermine) {
              demarrerChrono();
            } else if (!chronoTermine) {
              // Reprendre le chronomètre s'il était en pause
              reprendreChrono();
            }
          })
          .catch((error) => {
            console.error("Erreur lors de la lecture audio:", error);
          });
      }
    }
  }, [
    isPlaying,
    mancheActuelle,
    reversedBuffer,
    monstreBuffer,
    audioEffectApplied,
    chansonActuelle,
    playTriggered,
    chronoActif,
    chronoTermine,
    audioEffectsParams,
  ]);

  // Fonctions pour le chronomètre
  const demarrerChrono = () => {
    // Arrêter le chronomètre précédent s'il est actif
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Mettre à jour l'état du chronomètre
    setChronoEtats((prev) => ({
      ...prev,
      actif: true,
      termine: false,
      dernierTemps: Date.now(),
    }));

    timerRef.current = setInterval(() => {
      setChronoEtats((prev) => {
        const newTime = prev.tempsEcoule + 1;

        if (newTime >= 25) {
          // Arrêter le chronomètre s'il atteint 25 secondes
          clearInterval(timerRef.current);
          timerRef.current = null;

          // Mettre en pause l'audio si on atteint 25 secondes
          if (isPlaying) {
            if (mancheActuelle === 2 || mancheActuelle === 3) {
              stopModifiedAudio();
            } else if (audioRef.current) {
              audioRef.current.pause();
            }
            setIsPlaying(false);
          }

          return {
            tempsEcoule: 25,
            actif: false,
            termine: true,
            dernierTemps: prev.dernierTemps,
          };
        }

        // Mettre en pause l'audio si on atteint 20 secondes
        if (newTime === 20 && isPlaying) {
          if (mancheActuelle === 2 || mancheActuelle === 3) {
            stopModifiedAudio();
          } else if (audioRef.current) {
            audioRef.current.pause();
          }
          setIsPlaying(false);
        }

        return {
          ...prev,
          tempsEcoule: newTime,
          dernierTemps: Date.now(),
        };
      });
    }, 1000);
  };

  const arreterChrono = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setChronoEtats((prev) => ({
      ...prev,
      actif: false,
      dernierTemps: Date.now(),
    }));
  };

  // Nouvelle fonction pour reprendre le chronomètre
  const reprendreChrono = () => {
    // Arrêter le chronomètre précédent s'il est actif
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Mettre à jour l'état du chronomètre
    setChronoEtats((prev) => ({
      ...prev,
      actif: true,
      dernierTemps: Date.now(),
    }));

    timerRef.current = setInterval(() => {
      setChronoEtats((prev) => {
        const newTime = prev.tempsEcoule + 1;

        if (newTime >= 25) {
          // Arrêter le chronomètre s'il atteint 25 secondes
          clearInterval(timerRef.current);
          timerRef.current = null;

          // Mettre en pause l'audio si on atteint 25 secondes
          if (isPlaying) {
            if (mancheActuelle === 2 || mancheActuelle === 3) {
              stopModifiedAudio();
            } else if (audioRef.current) {
              audioRef.current.pause();
            }
            setIsPlaying(false);
          }

          return {
            tempsEcoule: 25,
            actif: false,
            termine: true,
            dernierTemps: prev.dernierTemps,
          };
        }

        // Mettre en pause l'audio si on atteint 20 secondes
        if (newTime === 20 && isPlaying) {
          if (mancheActuelle === 2 || mancheActuelle === 3) {
            stopModifiedAudio();
          } else if (audioRef.current) {
            audioRef.current.pause();
          }
          setIsPlaying(false);
        }

        return {
          ...prev,
          tempsEcoule: newTime,
          dernierTemps: Date.now(),
        };
      });
    }, 1000);
  };

  const reinitialiserChrono = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setChronoEtats({
      tempsEcoule: 0,
      actif: false,
      termine: false,
      dernierTemps: Date.now(),
    });
  };

  // Fonction pour avancer dans la piste audio
  const avancerAudio = () => {
    if (mancheActuelle === 2 || mancheActuelle === 3) {
      // Pour l'audio modifié
      if (bufferSourceRef.current && audioContextRef.current) {
        // Arrêter la lecture actuelle
        stopModifiedAudio();

        // Avancer de 5 secondes
        audioPositionRef.current += 5;

        // Redémarrer la lecture à la nouvelle position
        if (isPlaying) {
          playModifiedAudio();
        }
      }
    } else {
      // Pour l'audio normal
      if (audioRef.current) {
        audioRef.current.currentTime += 5;
      }
    }
  };

  // Fonction pour reculer dans la piste audio
  const reculerAudio = () => {
    if (mancheActuelle === 2 || mancheActuelle === 3) {
      // Pour l'audio modifié
      if (bufferSourceRef.current && audioContextRef.current) {
        // Arrêter la lecture actuelle
        stopModifiedAudio();

        // Reculer de 5 secondes (avec un minimum de 0)
        audioPositionRef.current = Math.max(0, audioPositionRef.current - 5);

        // Redémarrer la lecture à la nouvelle position
        if (isPlaying) {
          playModifiedAudio();
        }
      }
    } else {
      // Pour l'audio normal
      if (audioRef.current) {
        audioRef.current.currentTime = Math.max(
          0,
          audioRef.current.currentTime - 5
        );
      }
    }
  };

  const chansonSuivante = () => {
    if (chansonActuelle) {
      // Mémoriser l'ID de la chanson actuelle comme dernière jouée
      setLastPlayedSongId(chansonActuelle.id);

      // Ajouter la chanson à la liste des chansons jouées globalement
      setChansonsJouees((prev) => [...prev, chansonActuelle.id]);

      // Ajouter la chanson à la liste des chansons jouées pour cette manche
      setChansonsJoueesParManche((prev) => ({
        ...prev,
        [mancheActuelle]: [...prev[mancheActuelle], chansonActuelle.id],
      }));
    }

    if (
      (mancheActuelle === 2 || mancheActuelle === 3) &&
      bufferSourceRef.current
    ) {
      stopModifiedAudio();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }

    setIsPlaying(false);
    setAfficherReponse(false);
    setAfficherParoles(false);
    setAudioEffectApplied(false);
    setReversedBuffer(null);
    setMonstreBuffer(null);
    setPlayTriggered(false);
    reinitialiserChrono();
    audioPositionRef.current = 0;

    nettoyerConnexionsAudio();

    // Vérifier si on doit changer de manche
    const mancheChangee = verifierChangementManche();

    // Si la manche a changé, on ne sélectionne pas de nouvelle chanson ici
    // car useEffect se déclenchera avec le changement de mancheActuelle
    if (!mancheChangee) {
      // Sélectionner une nouvelle chanson
      const nouvelleChanson = obtenirChansonAleatoire();
      setChansonActuelle(nouvelleChanson);
    }
  };

  const toggleMute = () => {
    if ((mancheActuelle === 2 || mancheActuelle === 3) && gainNodeRef.current) {
      gainNodeRef.current.gain.value = isMuted ? audioVolume : 0;
    } else if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }

    setIsMuted(!isMuted);
  };

  // Modifier la fonction nettoyerConnexionsAudio pour nettoyer les nœuds d'effets
  const nettoyerConnexionsAudio = () => {
    try {
      stopModifiedAudio();

      if (sourceNodeRef.current) {
        // Arrêter l'oscillateur s'il existe
        if (sourceNodeRef.current.oscillator) {
          try {
            sourceNodeRef.current.oscillator.stop();
          } catch (error) {
            // Ignorer les erreurs si déjà arrêté
          }
        }

        // Déconnecter tous les nœuds
        if (sourceNodeRef.current.distortionNode) {
          sourceNodeRef.current.distortionNode.disconnect();
        }

        if (sourceNodeRef.current.filterNode) {
          sourceNodeRef.current.filterNode.disconnect();
        }

        if (sourceNodeRef.current.oscillatorGain) {
          sourceNodeRef.current.oscillatorGain.disconnect();
        }

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
        // Ne pas fermer le contexte audio, juste déconnecter les nœuds
        // audioContextRef.current.close().catch((error) => {
        //   console.error("Erreur lors de la fermeture de l'AudioContext:", error)
        // })
        // audioContextRef.current = null
      }
    } catch (error) {
      console.error("Erreur lors du nettoyage des connexions audio:", error);
    }
  };

  // Fonction pour préparer l'audio inversé
  const preparerAudioInverse = async (audioUrl) => {
    try {
      console.log("Préparation de l'audio inversé pour:", audioUrl);

      nettoyerConnexionsAudio();
      audioContextRef.current = new (window.AudioContext ||
        window.webkitAudioContext)();

      const response = await fetch(audioUrl);
      if (!response.ok) {
        throw new Error(
          `Erreur lors du chargement de l'audio: ${response.status}`
        );
      }

      const arrayBuffer = await response.arrayBuffer();
      if (!arrayBuffer || arrayBuffer.byteLength === 0) {
        throw new Error("Buffer audio vide");
      }

      console.log("Audio chargé, taille:", arrayBuffer.byteLength);

      const audioBuffer = await audioContextRef.current.decodeAudioData(
        arrayBuffer
      );
      console.log("Audio décodé, durée:", audioBuffer.duration, "secondes");

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

      console.log("Buffer inversé créé avec succès");
      setReversedBuffer(newBuffer);
      setAudioEffectApplied(true);

      return true;
    } catch (error) {
      console.error("Erreur lors de la préparation de l'audio inversé:", error);
      return false;
    }
  };

  // Remplacer la fonction preparerAudioMonstre par cette version qui utilise des nœuds d'effets en temps réel
  const preparerAudioMonstre = async (audioUrl) => {
    try {
      console.log("Préparation de l'audio monstre pour:", audioUrl);

      // Nettoyer les connexions audio existantes mais conserver le contexte si possible
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext ||
          window.webkitAudioContext)();
      }

      const response = await fetch(audioUrl);
      if (!response.ok) {
        throw new Error(
          `Erreur lors du chargement de l'audio: ${response.status}`
        );
      }

      const arrayBuffer = await response.arrayBuffer();
      if (!arrayBuffer || arrayBuffer.byteLength === 0) {
        throw new Error("Buffer audio vide");
      }

      console.log("Audio chargé, taille:", arrayBuffer.byteLength);

      const audioBuffer = await audioContextRef.current.decodeAudioData(
        arrayBuffer
      );
      console.log("Audio décodé, durée:", audioBuffer.duration, "secondes");

      // Stocker le buffer original pour pouvoir le réutiliser
      setMonstreBuffer(audioBuffer);
      setAudioEffectApplied(true);

      return true;
    } catch (error) {
      console.error("Erreur lors de la préparation de l'audio monstre:", error);
      return false;
    }
  };

  // Ajouter cette fonction pour créer une courbe de distorsion
  const createDistortionCurve = (amount) => {
    const samples = 44100;
    const curve = new Float32Array(samples);
    const deg = Math.PI / 180;

    for (let i = 0; i < samples; ++i) {
      const x = (i * 2) / samples - 1;
      curve[i] =
        ((3 + amount / 500) * x * 20 * deg) /
        (Math.PI + (amount / 500) * Math.abs(x));
    }

    return curve;
  };

  // Remplacer la fonction handleEffectsChange par cette version qui modifie les paramètres en temps réel
  const handleEffectsChange = (newParams) => {
    setAudioEffectsParams(newParams);

    // Si nous sommes en manche 3 et que nous avons un contexte audio actif
    if (
      mancheActuelle === 3 &&
      audioContextRef.current &&
      sourceNodeRef.current
    ) {
      const { distortion, pitchShift, wahFrequency, wahDepth, growlAmount } =
        newParams;

      // Mettre à jour les paramètres des nœuds d'effets en temps réel
      if (sourceNodeRef.current.distortionNode) {
        sourceNodeRef.current.distortionNode.curve =
          createDistortionCurve(distortion);
      }

      if (sourceNodeRef.current.oscillator) {
        sourceNodeRef.current.oscillator.frequency.value = wahFrequency;
      }

      if (sourceNodeRef.current.oscillatorGain) {
        // Réduire l'amplification du wah-wah de 1500 à 800
        sourceNodeRef.current.oscillatorGain.gain.value = wahDepth * 800;
      }

      // Stocker les autres paramètres pour référence
      sourceNodeRef.current.pitchShift = pitchShift;
      // Appliquer un effet de pitch shift plus prononcé en temps réel
      if (bufferSourceRef.current) {
        // Ajuster la vitesse de lecture pour simuler un changement de hauteur
        // Valeurs < 1 = voix grave, valeurs > 1 = voix aiguë (chipmunk)
        let playbackRate;
        if (pitchShift < 0.5) {
          // Effet très grave
          playbackRate = 0.4;
        } else if (pitchShift < 1) {
          // Effet grave
          playbackRate = 0.6;
        } else if (pitchShift > 2) {
          // Effet chipmunk
          playbackRate = 2.5;
        } else {
          // Effet légèrement aigu
          playbackRate = 1.5;
        }

        try {
          bufferSourceRef.current.playbackRate.value = playbackRate;
        } catch (error) {
          console.error("Erreur lors de l'ajustement du playbackRate:", error);
        }
      }
      sourceNodeRef.current.growlAmount = growlAmount;

      console.log("Paramètres d'effets mis à jour en temps réel");
    }
  };

  // Modifier la fonction appliquerEffetsAudio pour des effets plus extrêmes
  const appliquerEffetsAudio = (originalBuffer, effetsParams) => {
    const { distortion, pitchShift, wahFrequency, wahDepth, growlAmount } =
      effetsParams;
    const audioContext = audioContextRef.current;

    // Créer un nouveau buffer pour l'audio monstre
    const newBuffer = audioContext.createBuffer(
      originalBuffer.numberOfChannels,
      originalBuffer.length,
      originalBuffer.sampleRate
    );

    // Appliquer des effets monstrueux aux données audio
    for (
      let channel = 0;
      channel < originalBuffer.numberOfChannels;
      channel++
    ) {
      const channelData = originalBuffer.getChannelData(channel);
      const monstreData = newBuffer.getChannelData(channel);

      // Appliquer un pitch shifting pour rendre la voix plus grave
      const pitchShiftedData = new Float32Array(channelData.length);

      for (let i = 0; i < channelData.length; i++) {
        // Effet wah-wah (filtre passe-bande modulé) - moins extrême
        const wahModulation =
          Math.sin(
            (i / originalBuffer.sampleRate) * wahFrequency * Math.PI * 2
          ) *
          wahDepth *
          0.8; // Réduit de 1.5 à 0.8
        const sample = channelData[i] * (1 + wahModulation);

        // Appliquer un pitch shifting beaucoup plus prononcé
        let pitchFactor;
        if (pitchShift < 0.5) {
          // Voix très grave (effet monstre)
          pitchFactor = 2.5;
        } else if (pitchShift < 1) {
          // Voix grave
          pitchFactor = 1.8;
        } else if (pitchShift > 2) {
          // Voix très aiguë (effet chipmunk)
          pitchFactor = 0.4;
        } else {
          // Voix aiguë
          pitchFactor = 0.6;
        }

        const sourcePos = Math.floor(i / (pitchShift * pitchFactor));

        // Vérifier que nous sommes dans les limites du buffer
        if (sourcePos < channelData.length) {
          pitchShiftedData[i] = channelData[sourcePos];
        }
      }

      // Appliquer les effets sur le signal déjà modifié en hauteur
      for (let i = 0; i < channelData.length; i++) {
        // Utiliser le signal modifié en hauteur comme base
        let sample = pitchShiftedData[i] || 0;

        // Distorsion extrême (waveshaping) - plus extrême
        sample = Math.tanh(sample * (distortion / 800)) * 0.7;

        // Ajouter un effet de "grognement" aléatoire plus prononcé
        if (Math.random() < growlAmount) {
          const growlIntensity = growlAmount * 3; // Intensifier l'effet encore plus
          sample +=
            (Math.random() * 0.6 - 0.3) *
            Math.sin((i / originalBuffer.sampleRate) * 40 * Math.PI * 2) *
            growlIntensity;

          // Ajouter des craquements aléatoires pour un effet plus extrême
          if (Math.random() < growlAmount * 0.7) {
            sample *= 1 + Math.random() * 0.5;
          }

          // Ajouter des silences aléatoires pour un effet de "glitch"
          if (Math.random() < growlAmount * 0.3) {
            sample = 0;
          }
        }

        // Ajouter un effet de modulation de fréquence pour rendre le son encore plus méconnaissable
        if (distortion > 20000) {
          const modulationDepth = (distortion - 20000) / 20000; // Plus la distorsion est élevée, plus la modulation est forte
          sample +=
            sample *
            Math.sin((i / originalBuffer.sampleRate) * 120 * Math.PI * 2) *
            modulationDepth;

          // Ajouter un effet de "bit crushing" pour un son plus dégradé
          if (distortion > 50000) {
            const bitDepth = Math.max(
              2,
              Math.floor(16 - (distortion - 50000) / 10000)
            );
            const step = 2.0 / Math.pow(2, bitDepth);
            sample = Math.round(sample / step) * step;
          }
        }

        // Limiter pour éviter l'écrêtage
        sample = Math.max(-0.99, Math.min(0.99, sample));

        // Stocker le résultat
        monstreData[i] = sample;
      }
    }

    return newBuffer;
  };

  const toggleAudioEffectsExpanded = () => {
    setAudioEffectsExpanded(!audioEffectsExpanded);
  };

  // Nettoyer les ressources audio lors du démontage du composant
  useEffect(() => {
    return () => {
      nettoyerConnexionsAudio();
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Effet pour sélectionner une chanson aléatoire au démarrage
  useEffect(() => {
    if (!chansonActuelle) {
      const nouvelleChanson = obtenirChansonAleatoire();
      setChansonActuelle(nouvelleChanson);
    }
  }, [chansonActuelle]);

  // Effet pour gérer l'audio quand la chanson change
  useEffect(() => {
    if (!chansonActuelle) return;

    console.log("Changement de chanson détecté, manche:", mancheActuelle);

    if (audioRef.current) {
      audioRef.current.pause();
    }
    stopModifiedAudio();

    setIsPlaying(false);
    setAudioEffectApplied(false);
    setReversedBuffer(null);
    setMonstreBuffer(null);
    setPlayTriggered(false);
    reinitialiserChrono();
    audioPositionRef.current = 0;

    nettoyerConnexionsAudio();

    if (mancheActuelle === 2) {
      console.log("Manche 2 (Inversé) - préparation de l'audio inversé");
      preparerAudioInverse(chansonActuelle.audioUrl);
    } else if (mancheActuelle === 3) {
      console.log("Manche 3 (Monstre) - préparation de l'audio monstre");
      preparerAudioMonstre(chansonActuelle.audioUrl);
    } else {
      console.log("Manche standard - chargement audio normal");
      if (audioRef.current) {
        audioRef.current.src = chansonActuelle.audioUrl;
        audioRef.current.load();
        setAudioEffectApplied(true);
      }
    }
  }, [chansonActuelle, mancheActuelle]);

  // Effet pour nettoyer les connexions audio lors du changement de manche
  useEffect(() => {
    console.log(
      "Changement de manche détecté, nouvelle manche:",
      mancheActuelle
    );
    setAudioEffectApplied(false);
    setReversedBuffer(null);
    setMonstreBuffer(null);
    setPlayTriggered(false);
    audioPositionRef.current = 0;
    nettoyerConnexionsAudio();
    reinitialiserChrono();

    // Sélectionner une nouvelle chanson qui n'est pas la dernière jouée
    const nouvelleChanson = obtenirChansonAleatoire();
    setChansonActuelle(nouvelleChanson);
  }, [mancheActuelle]);

  // Gérer le changement de manche
  const changerManche = (mancheId) => {
    setMancheActuelle(mancheId);
    setIsPlaying(false);
    setAfficherReponse(false);
    setAfficherParoles(false);
    setPlayTriggered(false);
  };

  // Fonction pour ajouter une équipe - corrigée pour éviter [object Object]
  // Corrigeons la fonction ajouterEquipe pour s'assurer qu'elle fonctionne correctement
  const ajouterEquipe = (newTeam) => {
    console.log("Fonction ajouterEquipe appelée avec:", newTeam);

    // Vérifier si newTeam est un objet ou une chaîne
    if (typeof newTeam === "string") {
      // Si c'est une chaîne, créer un nouvel objet équipe
      const teamObj = {
        id: Date.now().toString(),
        name: newTeam,
        score: 0,
        color: colors[teams.length % colors.length],
      };
      console.log("Ajout d'une équipe à partir d'une chaîne:", teamObj);
      setTeams((prevTeams) => [...prevTeams, teamObj]);
    } else if (newTeam && typeof newTeam === "object") {
      // Si c'est déjà un objet, l'utiliser directement
      console.log("Ajout d'une équipe à partir d'un objet:", newTeam);
      setTeams((prevTeams) => [...prevTeams, newTeam]);
    } else {
      console.error("Format d'équipe invalide:", newTeam);
    }

    // Afficher les équipes actuelles pour le débogage
    console.log("Équipes après ajout:", teams);
  };

  // Fonction pour supprimer une équipe - corrigée pour utiliser l'ID
  const supprimerEquipe = (teamId) => {
    const newTeams = teams.filter((team) => team.id !== teamId);
    setTeams(newTeams);
  };

  // Fonction pour ajouter des points - corrigée pour utiliser l'ID
  const ajouterPoints = (teamId, points) => {
    const teamIndex = teams.findIndex((team) => team.id === teamId);

    if (teamIndex >= 0) {
      const newTeams = [...teams];
      newTeams[teamIndex] = {
        ...newTeams[teamIndex],
        score: newTeams[teamIndex].score + points,
      };
      setTeams(newTeams);
    } else {
      console.error("Équipe non trouvée avec l'ID:", teamId);
    }
  };

  return (
    <main className="jeu">
      <audio ref={audioRef} />

      <header className="jeu-header">
        <Link to="/" className="accueil-link">
          <Home size={24} />
        </Link>
        <h1>BlindTest Master</h1>
        <Music className="logo" size={32} />
      </header>

      {/* Remplacer l'ancien TeamManager par notre nouvelle version */}
      <TeamManager
        teams={teams}
        onAddTeam={ajouterEquipe}
        onRemoveTeam={supprimerEquipe}
        onAddPoints={ajouterPoints}
      />

      {/* Ajouter le composant ReglesDuJeu */}
      <ReglesDuJeu />

      <InfoManche manche={donneesMancheActuelle} />
      {mancheActuelle === 3 && (
        <div className="effets-info">
          <span className="effet-badge">
            Distorsion: {audioEffectsParams.distortion}
          </span>
          <span className="effet-badge">
            Hauteur: {audioEffectsParams.pitchShift.toFixed(2)}
          </span>
          <span className="effet-badge">
            Wah-Wah: {audioEffectsParams.wahFrequency.toFixed(1)}Hz
          </span>
          <span className="effet-badge">
            Grognement: {(audioEffectsParams.growlAmount * 100).toFixed(0)}%
          </span>
        </div>
      )}

      <section className="jeu-content">
        {chansonActuelle ? (
          <>
            <div className="chrono-container">
              <div
                className={`chrono ${
                  tempsEcoule > 20
                    ? "time-critical"
                    : tempsEcoule > 15
                    ? "time-warning"
                    : ""
                }`}
              >
                <span>{tempsEcoule} / 25 secondes</span>
                <div
                  className="chrono-progress"
                  style={{ width: `${(tempsEcoule / 25) * 100}%` }}
                ></div>
              </div>

              {/* Contrôles du chronomètre */}
              <div className="chrono-controls">
                {!chronoActif ? (
                  <button
                    className="chrono-button start"
                    onClick={demarrerChrono}
                    disabled={chronoTermine}
                  >
                    <Timer size={20} />
                    <span>Démarrer Chrono</span>
                  </button>
                ) : (
                  <button
                    className="chrono-button stop"
                    onClick={arreterChrono}
                  >
                    <TimerOff size={20} />
                    <span>Arrêter Chrono</span>
                  </button>
                )}
                <button
                  className="chrono-button reset"
                  onClick={reinitialiserChrono}
                >
                  <TimerReset size={20} />
                  <span>Réinitialiser</span>
                </button>
              </div>
            </div>

            <div className="player-controls-container">
              <div className="player-controls">
                <button
                  className="control-button rewind"
                  onClick={reculerAudio}
                  aria-label="Reculer"
                >
                  <Rewind size={24} />
                </button>

                <button
                  className="control-button play-pause"
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause" : "Lecture"}
                >
                  {isPlaying ? <Pause size={32} /> : <Play size={32} />}
                </button>

                <button
                  className="control-button forward"
                  onClick={avancerAudio}
                  aria-label="Avancer"
                >
                  <FastForward size={24} />
                </button>

                <button
                  className="control-button next"
                  onClick={chansonSuivante}
                  aria-label="Chanson suivante"
                >
                  <SkipForward size={32} />
                </button>

                <button
                  className="control-button mute"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Activer le son" : "Couper le son"}
                >
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
              </div>

              {mancheActuelle === 3 && (
                <AudioEffectsController
                  onEffectsChange={handleEffectsChange}
                  isExpanded={audioEffectsExpanded}
                  toggleExpanded={toggleAudioEffectsExpanded}
                  currentEffects={audioEffectsParams}
                />
              )}
            </div>

            <div className="guess-mode">
              {afficherReponse ? (
                <>
                  <AffichageChanson
                    chanson={chansonActuelle}
                    afficherTitre={true}
                    afficherArtiste={true}
                    afficherParoles={afficherParoles}
                  />

                  {/* Lecteur audio normal pour les manches 2 et 3 quand la réponse est révélée */}
                  {(mancheActuelle === 2 || mancheActuelle === 3) && (
                    <div className="normal-audio-player">
                      <h4>Version normale:</h4>
                      <audio
                        src={chansonActuelle.audioUrl}
                        controls
                        className="normal-audio-controls"
                      />
                    </div>
                  )}
                </>
              ) : (
                <div className="hidden-answer">
                  <p>?????</p>
                </div>
              )}
              <div className="action-buttons">
                <button
                  className="answer-toggle"
                  onClick={() => setAfficherReponse(!afficherReponse)}
                >
                  {afficherReponse
                    ? "Masquer la réponse"
                    : "Révéler la réponse"}
                </button>
                {afficherReponse && (
                  <button
                    className="lyrics-toggle"
                    onClick={() => setAfficherParoles(!afficherParoles)}
                  >
                    {afficherParoles
                      ? "Masquer les paroles"
                      : "Afficher les paroles"}
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="no-songs-message">
            <p>Aucune chanson disponible.</p>
            <p>
              Toutes les chansons ont été jouées ou il y a un problème de
              chargement.
            </p>
          </div>
        )}
      </section>

      <footer className="jeu-footer">
        <div className="round-navigation">
          {manches.map((manche) => (
            <button
              key={manche.id}
              className={`round-button ${
                mancheActuelle === manche.id ? "active" : ""
              }`}
              onClick={() => changerManche(manche.id)}
            >
              <span className="round-number">{manche.id}</span>
              <span className="round-emoji">{manche.emoji}</span>
            </button>
          ))}
        </div>

        <div className="songs-played-info">
          <p>
            Chansons jouées dans cette manche:{" "}
            {chansonsJoueesParManche[mancheActuelle].length} /{" "}
            {MAX_SONGS_PER_ROUND}
          </p>
          <p>
            Total des chansons jouées: {chansonsJouees.length} /{" "}
            {chansons.length}
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Jeu;
