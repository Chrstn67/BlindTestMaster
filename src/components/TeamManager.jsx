"use client";

import { useState, useEffect } from "react";
import {
  Plus,
  Trash2,
  Trophy,
  X,
  Medal,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import "../styles/TeamManager.css";

const TeamManager = ({ teams = [], onAddTeam, onRemoveTeam, onAddPoints }) => {
  const [newTeamName, setNewTeamName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [animateScore, setAnimateScore] = useState({});
  const [teamScores, setTeamScores] = useState({});
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [expandedTeam, setExpandedTeam] = useState(null);

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

  // Mettre à jour les scores locaux quand les équipes changent
  useEffect(() => {
    const newScores = {};
    teams.forEach((team) => {
      newScores[team.id] = team.score;
    });
    setTeamScores(newScores);
  }, [teams]);

  const handleAddTeam = () => {
    if (newTeamName.trim() === "") return;

    // Créer un nouvel objet équipe avec un ID unique
    const newTeam = {
      id: Date.now().toString(),
      name: newTeamName,
      score: 0,
      color: colors[teams.length % colors.length],
    };

    // Appeler la fonction parent pour ajouter l'équipe
    onAddTeam(newTeam);

    // Réinitialiser le champ de saisie
    setNewTeamName("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTeam();
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setExpandedTeam(null);
  };

  const toggleLeaderboard = () => {
    setShowLeaderboard(!showLeaderboard);
  };

  const toggleTeamExpand = (teamId) => {
    setExpandedTeam(expandedTeam === teamId ? null : teamId);
  };

  const handleAddPoints = (teamId, points) => {
    // Mettre à jour le score local immédiatement pour l'affichage
    setTeamScores((prev) => ({
      ...prev,
      [teamId]: (prev[teamId] || 0) + points,
    }));

    // Appeler la fonction parent pour mettre à jour le state global
    onAddPoints(teamId, points);

    // Animer l'ajout de points
    setAnimateScore((prev) => ({ ...prev, [teamId]: points }));

    // Réinitialiser l'animation après un délai
    setTimeout(() => {
      setAnimateScore((prev) => {
        const newState = { ...prev };
        delete newState[teamId];
        return newState;
      });
    }, 1000);
  };

  // Trier les équipes par score (du plus élevé au plus bas)
  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);

  // Obtenir le score actuel (soit du state local pour une mise à jour immédiate, soit de l'équipe)
  const getCurrentScore = (teamId) => {
    return teamScores[teamId] !== undefined
      ? teamScores[teamId]
      : teams.find((t) => t.id === teamId)?.score || 0;
  };

  return (
    <div className="team-manager-container">
      <button className="team-manager-button" onClick={openModal}>
        <Trophy size={20} />
        <span>Équipes & Scores</span>
      </button>

      {/* Bouton flottant pour afficher le classement */}
      <button
        className="leaderboard-floating-button"
        onClick={toggleLeaderboard}
      >
        <Medal size={20} />
        <span>Classement</span>
      </button>

      {/* Classement flottant */}
      {showLeaderboard && (
        <div className="floating-leaderboard">
          <div className="floating-leaderboard-header">
            <h3>Classement</h3>
            <button className="close-leaderboard" onClick={toggleLeaderboard}>
              <X size={18} />
            </button>
          </div>
          {sortedTeams.length > 0 ? (
            <div className="floating-leaderboard-content">
              {sortedTeams.map((team, index) => (
                <div
                  key={team.id}
                  className={`floating-leaderboard-item ${
                    index === 0
                      ? "first-place"
                      : index === 1
                      ? "second-place"
                      : index === 2
                      ? "third-place"
                      : ""
                  }`}
                >
                  <div className="leaderboard-position">
                    {index === 0 && (
                      <Trophy size={16} className="gold-trophy" />
                    )}
                    {index === 1 && (
                      <Medal size={16} className="silver-medal" />
                    )}
                    {index === 2 && (
                      <Medal size={16} className="bronze-medal" />
                    )}
                    {index > 2 && <span>#{index + 1}</span>}
                  </div>
                  <div
                    className="leaderboard-team-color"
                    style={{ backgroundColor: team.color }}
                  ></div>
                  <div className="leaderboard-team-name">{team.name}</div>
                  <div className="leaderboard-team-score">
                    {getCurrentScore(team.id)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="floating-leaderboard-empty">
              <p>Aucune équipe</p>
            </div>
          )}
        </div>
      )}

      {/* Modale unifiée pour la gestion des équipes et des scores */}
      {showModal && (
        <div className="team-modal-overlay" onClick={closeModal}>
          <div className="team-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="modal-header">
              <h2>Gestion des Équipes & Scores</h2>
            </div>

            <div className="unified-team-tab">
              <div className="add-team-form">
                <input
                  type="text"
                  value={newTeamName}
                  onChange={(e) => setNewTeamName(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Nom de l'équipe"
                  maxLength={20}
                />
                <button
                  className="add-team-button"
                  onClick={handleAddTeam}
                  disabled={newTeamName.trim() === ""}
                >
                  <Plus size={16} />
                  Ajouter une équipe
                </button>
              </div>

              {teams.length > 0 ? (
                <div className="teams-list">
                  {sortedTeams.map((team, index) => (
                    <div
                      key={team.id}
                      className={`team-item ${
                        expandedTeam === team.id ? "expanded" : ""
                      } ${
                        index === 0
                          ? "first-place"
                          : index === 1
                          ? "second-place"
                          : index === 2
                          ? "third-place"
                          : ""
                      }`}
                    >
                      <div
                        className="team-item-header"
                        onClick={() => toggleTeamExpand(team.id)}
                      >
                        <div className="team-rank">
                          {index === 0 && (
                            <Trophy size={16} className="gold-trophy" />
                          )}
                          {index === 1 && (
                            <Medal size={16} className="silver-medal" />
                          )}
                          {index === 2 && (
                            <Medal size={16} className="bronze-medal" />
                          )}
                          {index > 2 && (
                            <span className="rank-number">#{index + 1}</span>
                          )}
                        </div>

                        <div
                          className="team-color"
                          style={{ backgroundColor: team.color }}
                        ></div>

                        <div className="team-name">{team.name}</div>

                        <div className="team-score-display">
                          <span className="score-value">
                            {getCurrentScore(team.id)}
                          </span>
                          {animateScore[team.id] && (
                            <span
                              className={`score-animation ${
                                animateScore[team.id] < 0
                                  ? "negative"
                                  : "positive"
                              }`}
                            >
                              {animateScore[team.id] > 0
                                ? `+${animateScore[team.id]}`
                                : animateScore[team.id]}
                            </span>
                          )}
                        </div>

                        <button className="expand-toggle">
                          {expandedTeam === team.id ? (
                            <ChevronUp size={18} />
                          ) : (
                            <ChevronDown size={18} />
                          )}
                        </button>
                      </div>

                      {expandedTeam === team.id && (
                        <div className="team-actions">
                          <div className="team-actions-inner">
                            <div className="point-buttons">
                              <h4>Ajouter des points</h4>
                              <div className="point-buttons-grid">
                                {[1, 3, 4, -1].map((point) => (
                                  <button
                                    key={point}
                                    className={`point-button ${
                                      point < 0 ? "negative" : ""
                                    }`}
                                    style={{
                                      backgroundColor:
                                        point < 0
                                          ? "#ffeeee"
                                          : `${team.color}20`,
                                      borderColor:
                                        point < 0 ? "#e74c3c" : team.color,
                                      color: point < 0 ? "#e74c3c" : undefined,
                                    }}
                                    onClick={() =>
                                      handleAddPoints(team.id, point)
                                    }
                                  >
                                    {point > 0 ? `+${point}` : point}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <button
                              className="delete-team-button"
                              onClick={() => onRemoveTeam(team.id)}
                            >
                              <Trash2 size={16} />
                              <span>Supprimer l'équipe</span>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="no-teams">
                  <p>Aucune équipe ajoutée</p>
                  <p>Créez des équipes pour commencer à jouer!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamManager;
