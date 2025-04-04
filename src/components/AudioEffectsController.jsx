"use client";

import { useState, useEffect, useRef } from "react";
import {
  Sliders,
  AudioWaveform,
  Volume2,
  Zap,
  HelpCircle,
  Shuffle,
  RotateCcw,
  ChevronUp,
  ChevronDown,
  Skull,
  Baby,
  Clock,
  ClockIcon as ClockOff,
} from "lucide-react";
import "../styles/AudioEffectsController.css";

const AudioEffectsController = ({
  onEffectsChange,
  isExpanded,
  toggleExpanded,
  currentEffects,
  isPlaying,
  mancheActuelle,
}) => {
  const [distortion, setDistortion] = useState(
    currentEffects.distortion || 5000
  );
  const [pitchShift, setPitchShift] = useState(
    currentEffects.pitchShift || 0.6
  );
  const [wahFrequency, setWahFrequency] = useState(
    currentEffects.wahFrequency || 1
  );
  const [wahDepth, setWahDepth] = useState(currentEffects.wahDepth || 0.3);
  const [growlAmount, setGrowlAmount] = useState(
    currentEffects.growlAmount || 0.03
  );
  const [showTooltip, setShowTooltip] = useState(null);
  const [autoChangeEnabled, setAutoChangeEnabled] = useState(true);
  const [nextChangeCountdown, setNextChangeCountdown] = useState(5);

  const timerRef = useRef(null);
  const isFirstRender = useRef(true);
  const userInteractionTimeoutRef = useRef(null);
  const isUserInteractingRef = useRef(false);

  // Effet pour gérer le changement automatique des effets toutes les 5 secondes
  useEffect(() => {
    // Ne s'applique que pour la manche 3 et quand la lecture est active
    if (mancheActuelle !== 3 || !isPlaying || !autoChangeEnabled) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      return;
    }

    // Si l'utilisateur est en train d'interagir avec les contrôles, on ne change pas automatiquement
    if (isUserInteractingRef.current) return;

    // Démarrer le timer pour changer les effets toutes les 5 secondes
    if (!timerRef.current) {
      setNextChangeCountdown(5);

      timerRef.current = setInterval(() => {
        setNextChangeCountdown((prev) => {
          if (prev <= 1) {
            // Si l'utilisateur n'est pas en train d'interagir, on change les effets
            if (!isUserInteractingRef.current) {
              applyRandomEffects();
            }
            return 5;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [
    mancheActuelle,
    isPlaying,
    autoChangeEnabled,
    isUserInteractingRef.current,
  ]);

  // Effet pour mettre à jour les états locaux quand les effets externes changent
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setDistortion(currentEffects.distortion);
    setPitchShift(currentEffects.pitchShift);
    setWahFrequency(currentEffects.wahFrequency);
    setWahDepth(currentEffects.wahDepth);
    setGrowlAmount(currentEffects.growlAmount);
  }, [currentEffects]);

  const markUserInteraction = () => {
    isUserInteractingRef.current = true;

    // Réinitialiser le timeout précédent
    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }

    // Définir un nouveau timeout pour réinitialiser l'état d'interaction après 10 secondes
    userInteractionTimeoutRef.current = setTimeout(() => {
      isUserInteractingRef.current = false;
    }, 10000);
  };

  const handleDistortionChange = (e) => {
    markUserInteraction();
    const value = Number.parseInt(e.target.value);
    setDistortion(value);
    onEffectsChange({
      distortion: value,
      pitchShift,
      wahFrequency,
      wahDepth,
      growlAmount,
    });
  };

  const handlePitchShiftChange = (e) => {
    markUserInteraction();
    const value = Number.parseFloat(e.target.value);
    setPitchShift(value);
    onEffectsChange({
      distortion,
      pitchShift: value,
      wahFrequency,
      wahDepth,
      growlAmount,
    });
  };

  const handleWahFrequencyChange = (e) => {
    markUserInteraction();
    const value = Number.parseFloat(e.target.value);
    setWahFrequency(value);
    onEffectsChange({
      distortion,
      pitchShift,
      wahFrequency: value,
      wahDepth,
      growlAmount,
    });
  };

  const handleWahDepthChange = (e) => {
    markUserInteraction();
    const value = Number.parseFloat(e.target.value);
    setWahDepth(value);
    onEffectsChange({
      distortion,
      pitchShift,
      wahFrequency,
      wahDepth: value,
      growlAmount,
    });
  };

  const handleGrowlAmountChange = (e) => {
    markUserInteraction();
    const value = Number.parseFloat(e.target.value);
    setGrowlAmount(value);
    onEffectsChange({
      distortion,
      pitchShift,
      wahFrequency,
      wahDepth,
      growlAmount: value,
    });
  };

  const resetToDefaults = () => {
    markUserInteraction();
    const defaults = {
      distortion: 5000,
      pitchShift: 0.6,
      wahFrequency: 1,
      wahDepth: 0.3,
      growlAmount: 0.03,
    };

    setDistortion(defaults.distortion);
    setPitchShift(defaults.pitchShift);
    setWahFrequency(defaults.wahFrequency);
    setWahDepth(defaults.wahDepth);
    setGrowlAmount(defaults.growlAmount);

    onEffectsChange(defaults);
  };

  const applyRandomEffects = () => {
    const randomEffects = {
      distortion: Math.floor(Math.random() * 40000) + 5000,
      pitchShift:
        Math.random() > 0.5
          ? Math.random() * 2.5 + 1.5
          : Math.random() * 0.3 + 0.05,
      wahFrequency: Math.random() * 3 + 0.5,
      wahDepth: Math.random() * 0.3 + 0.1,
      growlAmount: Math.random() * 0.3,
    };

    setDistortion(randomEffects.distortion);
    setPitchShift(randomEffects.pitchShift);
    setWahFrequency(randomEffects.wahFrequency);
    setWahDepth(randomEffects.wahDepth);
    setGrowlAmount(randomEffects.growlAmount);

    onEffectsChange(randomEffects);
  };

  const applyExtremeEffects = () => {
    markUserInteraction();
    const extremeEffects = {
      distortion: 60000,
      pitchShift: Math.random() > 0.5 ? 3.5 : 0.05,
      wahFrequency: 5,
      wahDepth: 0.4,
      growlAmount: 0.5,
    };

    setDistortion(extremeEffects.distortion);
    setPitchShift(extremeEffects.pitchShift);
    setWahFrequency(extremeEffects.wahFrequency);
    setWahDepth(extremeEffects.wahDepth);
    setGrowlAmount(extremeEffects.growlAmount);

    onEffectsChange(extremeEffects);
  };

  const applyDeepVoice = () => {
    markUserInteraction();
    const deepVoice = {
      ...currentEffects,
      pitchShift: 0.2,
    };

    setPitchShift(deepVoice.pitchShift);
    onEffectsChange(deepVoice);
  };

  const applyChipmunkVoice = () => {
    markUserInteraction();
    const chipmunkVoice = {
      ...currentEffects,
      pitchShift: 3.5,
    };

    setPitchShift(chipmunkVoice.pitchShift);
    onEffectsChange(chipmunkVoice);
  };

  const toggleAutoChange = () => {
    setAutoChangeEnabled(!autoChangeEnabled);
  };

  const tooltips = {
    distortion: "Déforme le son. Valeur élevée = son saturé et méconnaissable.",
    pitchShift:
      "Modifie la hauteur de la voix. Valeurs basses (<1) = voix grave/monstre, valeurs hautes (>1) = voix chipmunk.",
    wahFrequency: "Vitesse d'oscillation du filtre wah-wah.",
    wahDepth: "Intensité de l'effet wah-wah.",
    growlAmount: "Ajoute des craquements et perturbations aléatoires.",
  };

  return (
    <div
      className={`audio-effects-controller ${
        isExpanded ? "expanded" : "collapsed"
      }`}
    >
      <div className="effects-header" onClick={toggleExpanded}>
        <Sliders size={16} />
        <h3>Effets Audio</h3>
        {mancheActuelle === 3 && isPlaying && autoChangeEnabled && (
          <div className="auto-change-indicator">
            <span className="countdown">{nextChangeCountdown}s</span>
          </div>
        )}
        <span className="toggle-icon">
          {isExpanded ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
        </span>
      </div>

      {isExpanded && (
        <div className="effects-content">
          {mancheActuelle === 3 && (
            <div className="auto-change-toggle">
              <button
                className={`auto-change-button ${
                  autoChangeEnabled ? "active" : ""
                }`}
                onClick={toggleAutoChange}
                title={
                  autoChangeEnabled
                    ? "Désactiver le changement automatique"
                    : "Activer le changement automatique"
                }
              >
                {autoChangeEnabled ? (
                  <>
                    <Clock size={14} />
                    <span>Auto (ON)</span>
                  </>
                ) : (
                  <>
                    <ClockOff size={14} />
                    <span>Auto (OFF)</span>
                  </>
                )}
              </button>
              <div className="auto-change-info">
                {autoChangeEnabled
                  ? "Les effets changent automatiquement toutes les 5 secondes"
                  : "Changement automatique désactivé"}
              </div>
            </div>
          )}

          <div className="voice-presets">
            <button className="voice-preset deep" onClick={applyDeepVoice}>
              <Skull size={14} />
              <span>Monstre</span>
            </button>
            <button
              className="voice-preset chipmunk"
              onClick={applyChipmunkVoice}
            >
              <Baby size={14} />
              <span>Chipmunk</span>
            </button>
          </div>

          <div className="effect-group">
            <label className="effect-label">
              <Zap size={14} />
              <span>Distorsion</span>
              <span className="help-container">
                <HelpCircle
                  size={14}
                  className="help-icon"
                  onMouseEnter={() => setShowTooltip("distortion")}
                  onMouseLeave={() => setShowTooltip(null)}
                />
                <span className="effect-value">{distortion}</span>
              </span>
              {showTooltip === "distortion" && (
                <div className="tooltip">{tooltips.distortion}</div>
              )}
            </label>
            <input
              type="range"
              min="1000"
              max="70000"
              step="1000"
              value={distortion}
              onChange={handleDistortionChange}
              className="effect-slider"
            />
          </div>

          <div className="effect-group">
            <label className="effect-label">
              <Volume2 size={14} />
              <span>Hauteur</span>
              <span className="help-container">
                <HelpCircle
                  size={14}
                  className="help-icon"
                  onMouseEnter={() => setShowTooltip("pitchShift")}
                  onMouseLeave={() => setShowTooltip(null)}
                />
                <span className="effect-value">{pitchShift.toFixed(2)}</span>
              </span>
              {showTooltip === "pitchShift" && (
                <div className="tooltip">{tooltips.pitchShift}</div>
              )}
            </label>
            <input
              type="range"
              min="0.05"
              max="4.0"
              step="0.05"
              value={pitchShift}
              onChange={handlePitchShiftChange}
              className="effect-slider"
            />
          </div>

          <div className="effect-group">
            <label className="effect-label">
              <AudioWaveform size={14} />
              <span>Wah-Freq</span>
              <span className="help-container">
                <HelpCircle
                  size={14}
                  className="help-icon"
                  onMouseEnter={() => setShowTooltip("wahFrequency")}
                  onMouseLeave={() => setShowTooltip(null)}
                />
                <span className="effect-value">{wahFrequency.toFixed(1)}</span>
              </span>
              {showTooltip === "wahFrequency" && (
                <div className="tooltip">{tooltips.wahFrequency}</div>
              )}
            </label>
            <input
              type="range"
              min="0.5"
              max="5"
              step="0.1"
              value={wahFrequency}
              onChange={handleWahFrequencyChange}
              className="effect-slider"
            />
          </div>

          <div className="effect-group">
            <label className="effect-label">
              <AudioWaveform size={14} />
              <span>Wah-Prof</span>
              <span className="help-container">
                <HelpCircle
                  size={14}
                  className="help-icon"
                  onMouseEnter={() => setShowTooltip("wahDepth")}
                  onMouseLeave={() => setShowTooltip(null)}
                />
                <span className="effect-value">{wahDepth.toFixed(2)}</span>
              </span>
              {showTooltip === "wahDepth" && (
                <div className="tooltip">{tooltips.wahDepth}</div>
              )}
            </label>
            <input
              type="range"
              min="0.1"
              max="0.5"
              step="0.01"
              value={wahDepth}
              onChange={handleWahDepthChange}
              className="effect-slider"
            />
          </div>

          <div className="effect-group">
            <label className="effect-label">
              <Zap size={14} />
              <span>Grognement</span>
              <span className="help-container">
                <HelpCircle
                  size={14}
                  className="help-icon"
                  onMouseEnter={() => setShowTooltip("growlAmount")}
                  onMouseLeave={() => setShowTooltip(null)}
                />
                <span className="effect-value">
                  {(growlAmount * 100).toFixed(0)}%
                </span>
              </span>
              {showTooltip === "growlAmount" && (
                <div className="tooltip">{tooltips.growlAmount}</div>
              )}
            </label>
            <input
              type="range"
              min="0"
              max="0.8"
              step="0.01"
              value={growlAmount}
              onChange={handleGrowlAmountChange}
              className="effect-slider"
            />
          </div>

          <div className="effects-buttons">
            <button className="random-button" onClick={applyRandomEffects}>
              <Shuffle size={14} />
              Aléatoire
            </button>
            <button className="extreme-button" onClick={applyExtremeEffects}>
              <Zap size={14} />
              Extrême
            </button>
            <button className="reset-button" onClick={resetToDefaults}>
              <RotateCcw size={14} />
              Réinitialiser
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AudioEffectsController;
