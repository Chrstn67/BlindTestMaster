import "../styles/AffichageChanson.css";

const AffichageChanson = ({
  chanson,
  afficherTitre,
  afficherArtiste,
  afficherParoles,
}) => {
  if (!chanson) return null;

  return (
    <div className="affichage-chanson">
      {afficherArtiste && <p className="chanson-artiste">{chanson.artiste}</p>}
      {afficherTitre && <h3 className="chanson-titre">{chanson.titre}</h3>}

      {afficherParoles && (
        <div className="paroles-container">
          <h4>Paroles:</h4>
          <p className="paroles">
            {chanson.paroles.split("\n").map((line, index) => (
              <span key={index} className="paroles-line">
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

export default AffichageChanson;
