import { Link } from "react-router-dom"
import { Music } from "lucide-react"
import "../styles/Home.css"

const Home = () => {
  return (
    <main className="home">
      <div className="home-container">
        <header className="home-header">
          <Music className="logo" size={48} />
          <h1>MusicQuiz Master</h1>
        </header>

        <section className="intro">
          <p>Test your music knowledge with our interactive blindtest game!</p>
          <p>Four exciting rounds with increasing difficulty and fun challenges.</p>
        </section>

        <section className="rounds-preview">
          <div className="round-card">
            <h3>Round 1</h3>
            <p>Classic Blindtest</p>
            <span className="emoji">🎵</span>
          </div>

          <div className="round-card">
            <h3>Round 2</h3>
            <p>Reversed Challenge</p>
            <span className="emoji">🔄</span>
          </div>

          <div className="round-card">
            <h3>Round 3</h3>
            <p>Distorted Tracks</p>
            <span className="emoji">🎙️</span>
          </div>

          <div className="round-card">
            <h3>Round 4</h3>
            <p>Scenario Quiz</p>
            <span className="emoji">🎭</span>
          </div>
        </section>

        <Link to="/game" className="start-button">
          Start Game
        </Link>
      </div>
    </main>
  )
}

export default Home

