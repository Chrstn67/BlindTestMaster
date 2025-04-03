"use client";

import { useState, useEffect, useMemo, useRef } from "react";
// Ajouter l'import pour les icônes ChevronUp et ChevronDown
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
  Info,
  AlertCircle,
  Play,
  Shuffle,
  FastForward,
  Rewind,
  ChevronUp,
  ChevronDown,
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

  // Ajouter ces états au début du composant, après les états existants
  const [currentPlaylist, setCurrentPlaylist] = useState([]);
  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState(0);
  const [isPlaylistMode, setIsPlaylistMode] = useState(false);
  const [shuffleMode, setShuffleMode] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);

  // Ajouter cet état après les autres états au début du composant
  const [controlsExpanded, setControlsExpanded] = useState(false);

  const audioRef = useRef(null);
  const isMobileRef = useRef(window.innerWidth <= 768);

  // Ajouter ces refs
  const progressBarRef = useRef(null);
  const playlistTimerRef = useRef(null);

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

  // Ajouter cette fonction après handlePlaySong
  const startPlaylist = (startSongId, shuffle = false) => {
    // Arrêter la lecture en cours si elle existe
    if (audioRef.current) {
      audioRef.current.pause();
    }

    // Créer la playlist basée sur les chansons filtrées
    let playlist = [...filteredAndSortedSongs];

    // Si mode aléatoire, mélanger la playlist
    if (shuffle) {
      playlist = [...playlist].sort(() => Math.random() - 0.5);
    }

    // Si on commence par une chanson spécifique, réorganiser la playlist
    if (startSongId) {
      const songIndex = playlist.findIndex((song) => song.id === startSongId);
      if (songIndex !== -1) {
        // Mettre la chanson de départ en premier
        const startSong = playlist[songIndex];
        playlist.splice(songIndex, 1);
        playlist.unshift(startSong);
      }
    }

    setCurrentPlaylist(playlist);
    setCurrentPlaylistIndex(0);
    setShuffleMode(shuffle);
    setIsPlaylistMode(true);

    // Démarrer la lecture de la première chanson
    if (playlist.length > 0) {
      playPlaylistSong(playlist[0]);
    }
  };

  // Ajouter cette fonction pour jouer une chanson de la playlist
  const playPlaylistSong = (song) => {
    if (audioRef.current) {
      audioRef.current.src = song.audioUrl;
      audioRef.current.load();
      audioRef.current
        .play()
        .then(() => {
          setPlayingSongId(song.id);
          setIsAudioLoaded(true);
        })
        .catch((error) => {
          console.error("Erreur lors de la lecture audio:", error);
          setPlayingSongId(null);
          // Passer à la chanson suivante en cas d'erreur
          playNextSong();
        });
    }
  };

  // Ajouter cette fonction pour passer à la chanson suivante
  const playNextSong = () => {
    if (!isPlaylistMode || currentPlaylist.length === 0) return;

    let nextIndex = currentPlaylistIndex + 1;

    // Si on est à la fin de la playlist, revenir au début
    if (nextIndex >= currentPlaylist.length) {
      nextIndex = 0;
    }

    setCurrentPlaylistIndex(nextIndex);
    playPlaylistSong(currentPlaylist[nextIndex]);
  };

  // Ajouter cette fonction pour passer à la chanson précédente
  const playPreviousSong = () => {
    if (!isPlaylistMode || currentPlaylist.length === 0) return;

    let prevIndex = currentPlaylistIndex - 1;

    // Si on est au début de la playlist, aller à la fin
    if (prevIndex < 0) {
      prevIndex = currentPlaylist.length - 1;
    }

    setCurrentPlaylistIndex(prevIndex);
    playPlaylistSong(currentPlaylist[prevIndex]);
  };

  // Ajouter cette fonction pour mettre à jour la progression audio
  const updateAudioProgress = () => {
    if (audioRef.current) {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setAudioProgress(progress);
      setAudioDuration(audioRef.current.duration);
    }
  };

  // Ajouter cette fonction pour naviguer dans la piste audio
  const seekAudio = (e) => {
    if (!audioRef.current || !progressBarRef.current) return;

    const progressBar = progressBarRef.current;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newProgress = (offsetX / rect.width) * 100;

    // Mettre à jour la position de lecture
    audioRef.current.currentTime =
      (newProgress / 100) * audioRef.current.duration;
    setAudioProgress(newProgress);
  };

  // Ajouter cette fonction pour formater le temps
  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${mins}:${secs}`;
  };

  // Ajouter cette fonction pour basculer le mode aléatoire
  const toggleShuffleMode = () => {
    const newShuffleMode = !shuffleMode;
    setShuffleMode(newShuffleMode);

    if (isPlaylistMode && currentPlaylist.length > 0) {
      // Réorganiser la playlist en conservant la chanson actuelle
      const currentSong = currentPlaylist[currentPlaylistIndex];
      const newPlaylist = [...filteredAndSortedSongs].filter(
        (song) => song.id !== currentSong.id
      );

      if (newShuffleMode) {
        // Mélanger la playlist
        newPlaylist.sort(() => Math.random() - 0.5);
      } else {
        // Trier selon le critère actuel
        newPlaylist.sort((a, b) => {
          const valueA =
            sortBy === "titre"
              ? a.titre.toLowerCase()
              : a.artiste.toLowerCase();
          const valueB =
            sortBy === "titre"
              ? b.titre.toLowerCase()
              : b.artiste.toLowerCase();
          return sortDirection === "asc"
            ? valueA.localeCompare(valueB)
            : valueB.localeCompare(valueA);
        });
      }

      // Remettre la chanson actuelle au début
      newPlaylist.unshift(currentSong);

      setCurrentPlaylist(newPlaylist);
      setCurrentPlaylistIndex(0);
    }
  };

  // Modifier la fonction handlePlaySong pour intégrer le mode playlist
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
        // Si c'est une nouvelle chanson, démarrer une nouvelle playlist
        startPlaylist(song.id, shuffleMode);
      }
    }
  };

  // Ajouter cette fonction pour basculer l'affichage des contrôles
  const toggleControls = () => {
    setControlsExpanded(!controlsExpanded);
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

  // Ajouter ces effets après les effets existants
  useEffect(() => {
    if (audioRef.current) {
      // Ajouter les écouteurs d'événements pour l'audio
      const audio = audioRef.current;

      const handleTimeUpdate = () => updateAudioProgress();
      const handleEnded = () => playNextSong();
      const handleLoadedMetadata = () => setIsAudioLoaded(true);

      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("ended", handleEnded);
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);

      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("ended", handleEnded);
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
    }
  }, [currentPlaylistIndex, currentPlaylist]);

  // Nettoyer le timer lors du démontage
  useEffect(() => {
    return () => {
      if (playlistTimerRef.current) {
        clearTimeout(playlistTimerRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Bouton pour ouvrir la modale */}
      <button className="liste-chansons-button" onClick={openModal}>
        <List size={20} />
        <span>Liste des Chansons</span>
      </button>

      {/* Lecteur audio pour la lecture des chansons */}
      <audio
        ref={audioRef}
        onEnded={() => {
          setPlayingSongId(null);
          if (isPlaylistMode) playNextSong();
        }}
        onError={() => setPlayingSongId(null)}
      />

      {/* Lecteur audio flottant - visible uniquement en mode playlist */}
      {isPlaylistMode && playingSongId && (
        <div className="floating-audio-player">
          <div className="player-song-info">
            {currentPlaylist.length > 0 &&
              currentPlaylistIndex < currentPlaylist.length && (
                <>
                  <div className="player-song-title">
                    {currentPlaylist[currentPlaylistIndex].titre}
                  </div>
                  <div className="player-song-artist">
                    {currentPlaylist[currentPlaylistIndex].artiste}
                  </div>
                </>
              )}
          </div>

          <div className="player-progress-container">
            <span className="player-time">
              {formatTime(audioRef.current?.currentTime || 0)}
            </span>
            <div
              className="player-progress-bar"
              ref={progressBarRef}
              onClick={seekAudio}
            >
              <div
                className="player-progress-fill"
                style={{ width: `${audioProgress}%` }}
              ></div>
            </div>
            <span className="player-time">
              {formatTime(audioDuration || 0)}
            </span>
          </div>

          <div className="player-controls">
            <button
              className={`player-shuffle-button ${shuffleMode ? "active" : ""}`}
              onClick={toggleShuffleMode}
              aria-label={
                shuffleMode
                  ? "Désactiver la lecture aléatoire"
                  : "Activer la lecture aléatoire"
              }
            >
              <Shuffle size={16} />
            </button>

            <button
              className="player-prev-button"
              onClick={playPreviousSong}
              aria-label="Chanson précédente"
            >
              <Rewind size={16} />
            </button>

            <button
              className="player-play-button"
              onClick={() => {
                if (audioRef.current) {
                  if (audioRef.current.paused) {
                    audioRef.current.play();
                  } else {
                    audioRef.current.pause();
                  }
                }
              }}
              aria-label={audioRef.current?.paused ? "Lecture" : "Pause"}
            >
              {audioRef.current?.paused ? (
                <Play size={20} />
              ) : (
                <Pause size={20} />
              )}
            </button>

            <button
              className="player-next-button"
              onClick={playNextSong}
              aria-label="Chanson suivante"
            >
              <FastForward size={16} />
            </button>

            <button
              className="player-close-button"
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.pause();
                }
                setIsPlaylistMode(false);
                setPlayingSongId(null);
              }}
              aria-label="Fermer le lecteur"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      )}

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

            {/* Onglets pour la navigation - visibles sur desktop et mobile */}
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
                <Info size={16} />
                <span>Statistiques</span>
              </button>
            </div>

            {/* Contenu de l'onglet Statistiques */}
            {activeTab === "stats" && (
              <div className="stats-tab-content">
                {/* Statistiques générales */}
                <div className="liste-chansons-stats">
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
                    <span className="stat-value">
                      {stats.playedInCurrentRound}
                    </span>
                    <span className="stat-label">Manche {mancheActuelle}</span>
                  </div>
                </div>

                {/* Statistiques détaillées par manche */}
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
              </div>
            )}

            {/* Contenu de l'onglet Chansons */}
            {activeTab === "all" && (
              <>
                {/* Contrôles - visibles en mode desktop ou dans l'onglet chansons en mobile */}
                <div className="liste-chansons-controls-container">
                  <button
                    className="controls-toggle-button"
                    onClick={toggleControls}
                    aria-expanded={controlsExpanded}
                    aria-label="Afficher les filtres et options"
                  >
                    <Filter size={18} />
                    <span>Filtres et options</span>
                    {controlsExpanded ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>

                  <div
                    className={`liste-chansons-controls ${
                      controlsExpanded ? "expanded" : ""
                    }`}
                  >
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
                </div>

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
                                  <div className="play-button-container">
                                    <button
                                      className="play-button"
                                      onClick={() => handlePlaySong(chanson)}
                                      aria-label={
                                        isPlaying ? "Pause" : "Écouter"
                                      }
                                    >
                                      {isPlaying ? (
                                        <Pause size={18} />
                                      ) : (
                                        <Headphones size={18} />
                                      )}
                                    </button>
                                    <div className="play-options">
                                      <button
                                        className="play-option-button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          startPlaylist(chanson.id, false);
                                        }}
                                        title="Lire dans l'ordre"
                                      >
                                        <Play size={14} />
                                      </button>
                                      <button
                                        className="play-option-button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          startPlaylist(chanson.id, true);
                                        }}
                                        title="Lecture aléatoire"
                                      >
                                        <Shuffle size={14} />
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <tr className="no-results">
                            <td colSpan={5}>
                              <div className="no-results-message">
                                <AlertCircle size={32} />
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
                              <div className="song-play-controls">
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
                                <div className="song-play-options">
                                  <button
                                    className="song-play-option"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      startPlaylist(chanson.id, false);
                                    }}
                                    title="Lire dans l'ordre"
                                  >
                                    <Play size={16} />
                                  </button>
                                  <button
                                    className="song-play-option"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      startPlaylist(chanson.id, true);
                                    }}
                                    title="Lecture aléatoire"
                                  >
                                    <Shuffle size={16} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="no-results-grid">
                        <AlertCircle size={40} />
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
