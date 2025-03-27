"use client";

import { useState, useEffect } from "react";
import {
  Plus,
  Trash2,
  Trophy,
  X,
  Users,
  Award,
  ChevronRight,
  ChevronLeft,
  Medal,
} from "lucide-react";
import "../styles/TeamManager.css";

const TeamManager = ({ teams = [], onAddTeam, onRemoveTeam, onAddPoints }) => {
  const [newTeamName, setNewTeamName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [modalTab, setModalTab] = useState("teams"); // "teams" ou "scores"
  const [animateScore, setAnimateScore] = useState(null);
  const [teamScores, setTeamScores] = useState({});
  const [showLeaderboard, setShowLeaderboard] = useState(false);

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

  // Mettre à jour l'équipe sélectionnée si elle existe dans les équipes
  useEffect(() => {
    if (selectedTeam) {
      const updatedTeam = teams.find((team) => team.id === selectedTeam.id);
      if (updatedTeam) {
        setSelectedTeam(updatedTeam);
      }
    }
  }, [teams, selectedTeam]);

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

    console.log("Équipe ajoutée:", newTeam);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTeam();
    }
  };

  const openModal = (tab, team = null) => {
    setModalTab(tab);
    setSelectedTeam(team);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTeam(null);
    setAnimateScore(null);
  };

  const toggleLeaderboard = () => {
    setShowLeaderboard(!showLeaderboard);
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
    setAnimateScore(points);

    // Réinitialiser l'animation après un délai
    setTimeout(() => {
      setAnimateScore(null);
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
      <button
        className="team-manager-button"
        onClick={() => openModal("teams")}
      >
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

      {/* Modale pour la gestion des équipes et des scores */}
      {showModal && (
        <div className="team-modal-overlay" onClick={closeModal}>
          <div className="team-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>
              <X size={24} />
            </button>

            {/* Navigation entre les onglets */}
            <div className="modal-tabs">
              <button
                className={`tab-button ${modalTab === "teams" ? "active" : ""}`}
                onClick={() => setModalTab("teams")}
              >
                <Users size={18} />
                <span>Équipes</span>
              </button>
              <button
                className={`tab-button ${
                  modalTab === "scores" ? "active" : ""
                }`}
                onClick={() => setModalTab("scores")}
              >
                <Award size={18} />
                <span>Scores</span>
              </button>
            </div>

            {/* Contenu de l'onglet Équipes */}
            {modalTab === "teams" && (
              <div className="teams-tab">
                <h2>Gestion des Équipes</h2>

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
                    Ajouter
                  </button>
                </div>

                {teams.length > 0 ? (
                  <div className="teams-grid">
                    {teams.map((team) => (
                      <div
                        key={team.id}
                        className="team-card"
                        style={{
                          borderColor: team.color,
                          backgroundColor: `${team.color}10`, // Couleur avec faible opacité
                        }}
                      >
                        <div
                          className="team-card-header"
                          style={{ backgroundColor: team.color }}
                        >
                          <h3>{team.name}</h3>
                        </div>
                        <div className="team-card-content">
                          <div className="team-score">
                            {getCurrentScore(team.id)}
                          </div>
                          <div className="team-card-actions">
                            <button
                              className="team-action-button score-button"
                              onClick={() => {
                                setSelectedTeam(team);
                                setModalTab("scores");
                              }}
                            >
                              <Award size={16} />
                              <span>Scores</span>
                              <ChevronRight size={14} />
                            </button>
                            <button
                              className="team-action-button delete-button"
                              onClick={() => onRemoveTeam(team.id)}
                            >
                              <Trash2 size={16} />
                              <span>Supprimer</span>
                            </button>
                          </div>
                        </div>
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
            )}

            {/* Contenu de l'onglet Scores */}
            {modalTab === "scores" && (
              <div className="scores-tab">
                {selectedTeam ? (
                  <div className="team-score-detail">
                    <button
                      className="back-button"
                      onClick={() => setModalTab("teams")}
                    >
                      <ChevronLeft size={16} />
                      <span>Retour</span>
                    </button>

                    <div
                      className="team-score-header"
                      style={{ backgroundColor: selectedTeam.color }}
                    >
                      <h2>{selectedTeam.name}</h2>
                    </div>

                    <div className="current-score-container">
                      <div className="current-score-value">
                        {getCurrentScore(selectedTeam.id)}
                        {animateScore && (
                          <span className="score-animation">
                            {animateScore > 0
                              ? `+${animateScore}`
                              : animateScore}
                          </span>
                        )}
                      </div>
                      <div className="current-score-label">points</div>
                    </div>

                    <div className="point-buttons-container">
                      <h3>Ajouter des points</h3>
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
                                  : `${selectedTeam.color}20`,
                              borderColor:
                                point < 0 ? "#e74c3c" : selectedTeam.color,
                              color: point < 0 ? "#e74c3c" : undefined,
                            }}
                            onClick={() =>
                              handleAddPoints(selectedTeam.id, point)
                            }
                          >
                            {point > 0 ? `+${point}` : point}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="scores-leaderboard">
                    <h2>Classement des Équipes</h2>

                    {sortedTeams.length > 0 ? (
                      <div className="leaderboard">
                        {sortedTeams.map((team, index) => (
                          <div
                            key={team.id}
                            className={`leaderboard-item ${
                              index === 0
                                ? "first-place"
                                : index === 1
                                ? "second-place"
                                : index === 2
                                ? "third-place"
                                : ""
                            }`}
                            onClick={() => setSelectedTeam(team)}
                          >
                            <div className="leaderboard-rank">
                              {index === 0 && (
                                <Trophy size={18} className="gold-trophy" />
                              )}
                              {index === 1 && (
                                <Medal size={18} className="silver-medal" />
                              )}
                              {index === 2 && (
                                <Medal size={18} className="bronze-medal" />
                              )}
                              {index > 2 && <span>#{index + 1}</span>}
                            </div>
                            <div
                              className="leaderboard-color"
                              style={{ backgroundColor: team.color }}
                            ></div>
                            <div className="leaderboard-name">{team.name}</div>
                            <div className="leaderboard-score">
                              {getCurrentScore(team.id)}
                            </div>
                            <ChevronRight
                              size={16}
                              className="leaderboard-arrow"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="no-teams">
                        <p>Aucune équipe ajoutée</p>
                        <p>Créez des équipes pour voir le classement!</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamManager;
