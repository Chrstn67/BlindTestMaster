import "../styles/round-info.css";

const RoundInfo = ({ round }) => {
  if (!round) return null;

  return (
    <section className="round-info">
      <div className="round-header">
        <span className="round-emoji">{round.emoji}</span>
        <h2>
          Round {round.id}: {round.name}
        </h2>
      </div>
      <div className="round-details">
        <p>{round.description}</p>
        <p className="points-info">{round.points}</p>
      </div>
    </section>
  );
};

export default RoundInfo;
