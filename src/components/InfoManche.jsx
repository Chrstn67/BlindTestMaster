import "../styles/InfoManche.css";

const InfoManche = ({ manche }) => {
  if (!manche) return null;

  return (
    <section className="info-manche">
      <div className="manche-header">
        <span className="manche-emoji">{manche.emoji}</span>
        <h2>
          Manche {manche.id}: {manche.nom}
        </h2>
      </div>
      <div className="manche-details">
        <p>{manche.description}</p>
        <p className="points-info">{manche.points}</p>
      </div>
    </section>
  );
};

export default InfoManche;
