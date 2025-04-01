"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import {
  X,
  Music,
  Search,
  ArrowUpDown,
  CheckCircle,
  List,
  Filter,
  Pause,
  Headphones,
  Grid,
  Table,
} from "lucide-react";
import "../styles/ListeChansons.css";

const ListeChansons = ({
  chansons,
  chansonsJouees,
  chansonsJoueesParManche,
  mancheActuelle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState("titre"); // "titre" ou "artiste"
  const [sortDirection, setSortDirection] = useState("asc"); // "asc" ou "desc"
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPlayed, setFilterPlayed] = useState("all"); // "all", "played", "notPlayed"
  const [viewMode, setViewMode] = useState("table"); // "table" ou "grid"
  const [activeTab, setActiveTab] = useState("all"); // "all" ou "stats"
  const [playingSongId, setPlayingSongId] = useState(null);

  const audioRef = useRef(null);
  const isMobileRef = useRef(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      isMobileRef.current = window.innerWidth <= 768;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    // Arrêter la lecture audio si elle est en cours
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayingSongId(null);
    }
  };

  // Fonction pour trier les chansons
  const handleSort = (field) => {
    if (sortBy === field) {
      // Si on clique sur le même champ, on inverse la direction
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // Sinon, on trie par le nouveau champ en ordre ascendant
      setSortBy(field);
      setSortDirection("asc");
    }
  };

  // Fonction pour vérifier si une chanson a été jouée
  const isSongPlayed = (songId) => {
    return chansonsJouees.includes(songId);
  };

  // Fonction pour vérifier si une chanson a été jouée dans la manche actuelle
  const isSongPlayedInCurrentRound = (songId) => {
    return chansonsJoueesParManche[mancheActuelle]?.includes(songId) || false;
  };

  // Fonction pour gérer la lecture audio
  const handlePlaySong = (song) => {
    if (audioRef.current) {
      if (playingSongId === song.id) {
        // Si c'est la même chanson, on bascule entre lecture et pause
        if (audioRef.current.paused) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
          setPlayingSongId(null);
        }
      } else {
        // Si c'est une nouvelle chanson
        audioRef.current.src = song.audioUrl;
        audioRef.current.play();
        setPlayingSongId(song.id);
      }
    }
  };

  // Filtrer et trier les chansons
  const filteredAndSortedSongs = useMemo(() => {
    // Filtrer par recherche et statut
    const filtered = chansons.filter((chanson) => {
      const matchesSearch =
        chanson.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chanson.artiste.toLowerCase().includes(searchTerm.toLowerCase());

      if (filterPlayed === "all") return matchesSearch;
      if (filterPlayed === "played")
        return matchesSearch && isSongPlayed(chanson.id);
      if (filterPlayed === "notPlayed")
        return matchesSearch && !isSongPlayed(chanson.id);

      return matchesSearch;
    });

    // Trier les chansons
    return filtered.sort((a, b) => {
      const valueA =
        sortBy === "titre" ? a.titre.toLowerCase() : a.artiste.toLowerCase();
      const valueB =
        sortBy === "titre" ? b.titre.toLowerCase() : b.artiste.toLowerCase();

      if (sortDirection === "asc") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });
  }, [
    chansons,
    sortBy,
    sortDirection,
    searchTerm,
    filterPlayed,
    chansonsJouees,
  ]);

  // Statistiques
  const stats = useMemo(() => {
    return {
      total: chansons.length,
      played: chansonsJouees.length,
      remaining: chansons.length - chansonsJouees.length,
      playedInCurrentRound:
        chansonsJoueesParManche[mancheActuelle]?.length || 0,
    };
  }, [chansons, chansonsJouees, chansonsJoueesParManche, mancheActuelle]);

  // Statistiques par manche
  const roundStats = useMemo(() => {
    return Object.entries(chansonsJoueesParManche).map(([round, songs]) => ({
      round: Number.parseInt(round),
      count: songs.length,
    }));
  }, [chansonsJoueesParManche]);

  return (
    <>
      {/* Bouton pour ouvrir la modale */}
      <button className="liste-chansons-button" onClick={openModal}>
        <List size={20} />
        <span>Liste des Chansons</span>
      </button>

      {/* Lecteur audio caché pour la lecture des chansons */}
      <audio
        ref={audioRef}
        onEnded={() => setPlayingSongId(null)}
        onError={() => setPlayingSongId(null)}
      />

      {/* Modale */}
      {isOpen && (
        <div className="liste-chansons-overlay" onClick={closeModal}>
          <div
            className="liste-chansons-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="liste-chansons-close" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="liste-chansons-header">
              <h2>Liste des Chansons</h2>
              <p>Toutes les chansons disponibles dans le jeu</p>
            </div>

            {/* Onglets pour mobile */}
            <div className="liste-chansons-tabs">
              <button
                className={`liste-chansons-tab ${
                  activeTab === "all" ? "active" : ""
                }`}
                onClick={() => setActiveTab("all")}
              >
                <Music size={16} />
                <span>Chansons</span>
              </button>
              <button
                className={`liste-chansons-tab ${
                  activeTab === "stats" ? "active" : ""
                }`}
                onClick={() => setActiveTab("stats")}
              >
                <CheckCircle size={16} />
                <span>Statistiques</span>
              </button>
            </div>

            {/* Statistiques - visibles en mode desktop ou dans l'onglet stats en mobile */}
            <div
              className={`liste-chansons-stats ${
                activeTab === "stats" ? "mobile-visible" : ""
              }`}
            >
              <div className="stat-item">
                <span className="stat-value">{stats.total}</span>
                <span className="stat-label">Total</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{stats.played}</span>
                <span className="stat-label">Jouées</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{stats.remaining}</span>
                <span className="stat-label">Restantes</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{stats.playedInCurrentRound}</span>
                <span className="stat-label">Manche {mancheActuelle}</span>
              </div>
            </div>

            {/* Statistiques détaillées par manche - visibles uniquement dans l'onglet stats en mobile */}
            {activeTab === "stats" && (
              <div className="round-stats">
                <h3>Chansons jouées par manche</h3>
                <div className="round-stats-grid">
                  {roundStats.map((stat) => (
                    <div key={stat.round} className="round-stat-item">
                      <div className={`round-badge round-${stat.round}`}>
                        {stat.round}
                      </div>
                      <span className="round-stat-count">{stat.count}</span>
                      <span className="round-stat-label">chansons</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contrôles - visibles en mode desktop ou dans l'onglet chansons en mobile */}
            {(activeTab === "all" || !isMobileRef.current) && (
              <div className="liste-chansons-controls">
                <div className="search-container">
                  <Search size={18} className="search-icon" />
                  <input
                    type="text"
                    placeholder="Rechercher une chanson ou un artiste..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                  {searchTerm && (
                    <button
                      className="clear-search"
                      onClick={() => setSearchTerm("")}
                      aria-label="Effacer la recherche"
                    >
                      <X size={16} />
                    </button>
                  )}
                </div>

                <div className="filter-container">
                  <Filter size={18} className="filter-icon" />
                  <select
                    value={filterPlayed}
                    onChange={(e) => setFilterPlayed(e.target.value)}
                    className="filter-select"
                  >
                    <option value="all">Toutes les chansons</option>
                    <option value="played">Déjà jouées</option>
                    <option value="notPlayed">Non jouées</option>
                  </select>
                </div>

                <div className="view-toggle">
                  <button
                    className={`view-button ${
                      viewMode === "table" ? "active" : ""
                    }`}
                    onClick={() => setViewMode("table")}
                    aria-label="Vue tableau"
                  >
                    <Table size={18} />
                  </button>
                  <button
                    className={`view-button ${
                      viewMode === "grid" ? "active" : ""
                    }`}
                    onClick={() => setViewMode("grid")}
                    aria-label="Vue grille"
                  >
                    <Grid size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* Contenu principal - visible en mode desktop ou dans l'onglet chansons en mobile */}
            {(activeTab === "all" || !isMobileRef.current) && (
              <>
                {/* Vue tableau */}
                {viewMode === "table" && (
                  <div className="liste-chansons-table-container">
                    <table className="liste-chansons-table">
                      <thead>
                        <tr>
                          <th className="status-column">Statut</th>
                          <th
                            className={`sortable ${
                              sortBy === "titre" ? "active" : ""
                            }`}
                            onClick={() => handleSort("titre")}
                          >
                            Titre
                            {sortBy === "titre" && (
                              <ArrowUpDown
                                size={16}
                                className={`sort-icon ${
                                  sortDirection === "desc" ? "desc" : ""
                                }`}
                              />
                            )}
                          </th>
                          <th
                            className={`sortable ${
                              sortBy === "artiste" ? "active" : ""
                            }`}
                            onClick={() => handleSort("artiste")}
                          >
                            Artiste
                            {sortBy === "artiste" && (
                              <ArrowUpDown
                                size={16}
                                className={`sort-icon ${
                                  sortDirection === "desc" ? "desc" : ""
                                }`}
                              />
                            )}
                          </th>
                          <th className="round-column">Manche</th>
                          <th className="action-column">Écouter</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredAndSortedSongs.length > 0 ? (
                          filteredAndSortedSongs.map((chanson) => {
                            const played = isSongPlayed(chanson.id);
                            const playedInCurrentRound =
                              isSongPlayedInCurrentRound(chanson.id);
                            const isPlaying = playingSongId === chanson.id;

                            // Déterminer dans quelle manche la chanson a été jouée
                            let playedInRound = null;
                            for (const [round, songs] of Object.entries(
                              chansonsJoueesParManche
                            )) {
                              if (songs.includes(chanson.id)) {
                                playedInRound = round;
                                break;
                              }
                            }

                            return (
                              <tr
                                key={chanson.id}
                                className={`
                                  ${played ? "played" : ""} 
                                  ${
                                    playedInCurrentRound
                                      ? "played-current-round"
                                      : ""
                                  }
                                  ${isPlaying ? "playing" : ""}
                                `}
                              >
                                <td className="status-cell">
                                  {played ? (
                                    <CheckCircle
                                      size={18}
                                      className="played-icon"
                                    />
                                  ) : (
                                    <Music
                                      size={18}
                                      className="not-played-icon"
                                    />
                                  )}
                                </td>
                                <td>{chanson.titre}</td>
                                <td>{chanson.artiste}</td>
                                <td className="round-cell">
                                  {playedInRound ? (
                                    <span
                                      className={`round-badge round-${playedInRound}`}
                                    >
                                      {playedInRound}
                                    </span>
                                  ) : (
                                    "-"
                                  )}
                                </td>
                                <td className="action-cell">
                                  <button
                                    className="play-button"
                                    onClick={() => handlePlaySong(chanson)}
                                    aria-label={isPlaying ? "Pause" : "Écouter"}
                                  >
                                    {isPlaying ? (
                                      <Pause size={18} />
                                    ) : (
                                      <Headphones size={18} />
                                    )}
                                  </button>
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <tr className="no-results">
                            <td colSpan={5}>
                              <div className="no-results-message">
                                <Search size={24} />
                                <p>
                                  Aucune chanson ne correspond à votre recherche
                                </p>
                              </div>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Vue grille */}
                {viewMode === "grid" && (
                  <div className="liste-chansons-grid-container">
                    {filteredAndSortedSongs.length > 0 ? (
                      <div className="liste-chansons-grid">
                        {filteredAndSortedSongs.map((chanson) => {
                          const played = isSongPlayed(chanson.id);
                          const playedInCurrentRound =
                            isSongPlayedInCurrentRound(chanson.id);
                          const isPlaying = playingSongId === chanson.id;

                          // Déterminer dans quelle manche la chanson a été jouée
                          let playedInRound = null;
                          for (const [round, songs] of Object.entries(
                            chansonsJoueesParManche
                          )) {
                            if (songs.includes(chanson.id)) {
                              playedInRound = round;
                              break;
                            }
                          }

                          return (
                            <div
                              key={chanson.id}
                              className={`
                                song-card
                                ${played ? "played" : ""} 
                                ${
                                  playedInCurrentRound
                                    ? "played-current-round"
                                    : ""
                                }
                                ${isPlaying ? "playing" : ""}
                              `}
                            >
                              <div className="song-card-header">
                                {played ? (
                                  <CheckCircle
                                    size={18}
                                    className="played-icon"
                                  />
                                ) : (
                                  <Music
                                    size={18}
                                    className="not-played-icon"
                                  />
                                )}
                                {playedInRound && (
                                  <span
                                    className={`round-badge round-${playedInRound}`}
                                  >
                                    {playedInRound}
                                  </span>
                                )}
                              </div>
                              <div className="song-card-content">
                                <h3 className="song-title">{chanson.titre}</h3>
                                <p className="song-artist">{chanson.artiste}</p>
                              </div>
                              <button
                                className="song-play-button"
                                onClick={() => handlePlaySong(chanson)}
                                aria-label={isPlaying ? "Pause" : "Écouter"}
                              >
                                {isPlaying ? (
                                  <Pause size={20} />
                                ) : (
                                  <Headphones size={20} />
                                )}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="no-results-grid">
                        <Search size={32} />
                        <p>Aucune chanson ne correspond à votre recherche</p>
                      </div>
                    )}
                  </div>
                )}
              </>
            )}

            <div className="liste-chansons-footer">
              <p>
                {filteredAndSortedSongs.length} chanson
                {filteredAndSortedSongs.length !== 1 ? "s" : ""} affichée
                {filteredAndSortedSongs.length !== 1 ? "s" : ""}
              </p>
              <button
                className="liste-chansons-close-button"
                onClick={closeModal}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListeChansons;
