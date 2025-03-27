import "../styles/song-display.css";

const SongDisplay = ({ song, showTitle, showArtist, showLyrics }) => {
  if (!song) return null;

  return (
    <div className="song-display">
      {showTitle && <h3 className="song-title">{song.title}</h3>}
      {showArtist && <p className="song-artist">{song.artist}</p>}

      {showLyrics && (
        <div className="lyrics-container">
          <h4>Lyrics:</h4>
          <p className="lyrics">
            {song.lyrics.split("\n").map((line, index) => (
              <span key={index} className="lyrics-line">
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};

export default SongDisplay;
