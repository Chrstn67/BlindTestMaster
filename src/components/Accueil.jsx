import { Link } from "react-router-dom";
import { Music } from "lucide-react";
import "../styles/Accueil.css";

const Accueil = () => {
  return (
    <main className="accueil">
      <div className="accueil-container">
        <header className="accueil-header">
          <Music className="logo" size={48} />
          <h1>BlindTest Master</h1>
        </header>

        <section className="intro">
          <p>
            Testez vos connaissances musicales avec notre jeu de blindtest
            interactif !
          </p>
          <p>
            Trois manches passionnantes avec une difficulté croissante et des
            défis amusants.
          </p>
        </section>

        <section className="manches-preview">
          <div className="manche-card">
            <h3>Manche 1</h3>
            <p>Easy BlindTest</p>
            <span className="emoji">🎵</span>
          </div>

          <div className="manche-card">
            <h3>Manche 2</h3>
            <p>dnilBtseT</p>
            <span className="emoji">🎙️</span>
          </div>

          <div className="manche-card">
            <h3>Manche 3</h3>
            <p>X-trem BlindTest</p>
            <span className="emoji">🔀</span>
          </div>
        </section>

        <Link to="/jeu" className="start-button">
          Commencer le Jeu
        </Link>
      </div>
    </main>
  );
};

export default Accueil;
