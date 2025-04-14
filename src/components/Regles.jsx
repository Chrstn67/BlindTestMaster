"use client";

import { useState } from "react";
import { X, BookOpen, Info, Music, Users, Mic } from "lucide-react";
import "../styles/Regles.css";

const ReglesDuJeu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("general");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Bouton pour ouvrir la modale */}
      <button className="regles-button" onClick={openModal}>
        <BookOpen size={20} />
        <span>Règles du jeu</span>
      </button>

      {/* Modale */}
      {isOpen && (
        <div className="regles-overlay" onClick={closeModal}>
          <div className="regles-modal" onClick={(e) => e.stopPropagation()}>
            <button className="regles-close" onClick={closeModal}>
              <X size={24} />
            </button>

            <div className="regles-header">
              <h2>Règles du BlindTest Master</h2>
              <p>Tout ce que tu dois savoir pour jouer</p>
            </div>

            {/* Navigation par onglets - Réduit à 3 onglets */}
            <div className="regles-tabs">
              <button
                className={`regles-tab ${
                  activeTab === "general" ? "active" : ""
                }`}
                onClick={() => setActiveTab("general")}
              >
                <Info size={18} />
                <span>Général</span>
              </button>
              <button
                className={`regles-tab ${
                  activeTab === "manches" ? "active" : ""
                }`}
                onClick={() => setActiveTab("manches")}
              >
                <Music size={18} />
                <span>Manches & Points</span>
              </button>
              <button
                className={`regles-tab ${
                  activeTab === "equipes" ? "active" : ""
                }`}
                onClick={() => setActiveTab("equipes")}
              >
                <Users size={18} />
                <span>Équipes & Temps</span>
              </button>
            </div>

            {/* Contenu des règles */}
            <div className="regles-content">
              {activeTab === "general" && (
                <div className="regles-section">
                  <h3>Principe du jeu</h3>
                  <p>
                    <i>BlindTest Master</i> est un jeu musical où les joueurs
                    doivent deviner le titre et/ou l'artiste d'une chanson
                    jouée. Le jeu se déroule en plusieurs manches avec 3
                    variantes correspondant à 3 différents niveaux de
                    difficulté.
                  </p>

                  <h3>Objectif</h3>
                  <p>
                    Obtenir le maximum de points en identifiant correctement les
                    chansons jouées. L'équipe avec le plus de points à la fin de
                    toutes les manches remporte la partie.
                  </p>

                  <div className="buzzer-rule">
                    <div className="buzzer-icon">
                      <Mic size={24} />
                    </div>
                    <div className="buzzer-content">
                      <h3>Règle du micro-buzzer</h3>
                      <p className="points-note">
                        {" "}
                        S'il n'y a pas de buzzer, nous utiliserons un faux micro
                        qu'il faut attraper le plus rapidement possible.
                      </p>
                      <p>
                        Pour répondre, une équipe doit d'abord, et le plus
                        rapidement possible, appuyer sur le buzzer ou attraper
                        le micro-buzzer. <br /> La première équipe qui buzz ou
                        s'empare du micro a le droit de proposer sa réponse. Si
                        la réponse est incorrecte, les autres équipes peuvent
                        alors tenter leur chance.
                      </p>
                    </div>
                  </div>

                  <h3>Déroulement</h3>
                  <p>
                    1. Forme des équipes et donne-leur un nom
                    <br />
                    2. Joue les chansons une par une
                    <br />
                    3. L'équipe qui attrape le micro-buzzer en premier peut
                    répondre
                    <br />
                    4. L' équipe qui donne la réponse en premier et correctement
                    gagne les points en jeu
                    <br />
                    5. Passe à travers les différentes manches
                    <br />
                    6. L'équipe avec le plus de points à la fin gagne
                  </p>
                </div>
              )}

              {activeTab === "manches" && (
                <div className="regles-section">
                  <h3>Les différentes manches</h3>

                  <div className="manche-card">
                    <div className="manche-header">
                      <span className="manche-number">1</span>
                      <span className="manche-emoji">🎵</span>
                      <h4>Easy BlindTest</h4>
                    </div>
                    <p>
                      Les chansons sont jouées normalement. Les joueurs doivent
                      identifier le titre et l'artiste.
                    </p>
                    <div className="points-info">
                      <strong>Points :</strong> +1 pour le titre, +1 pour
                      l'artiste
                    </div>
                  </div>

                  <div className="manche-card">
                    <div className="manche-header">
                      <span className="manche-number">2</span>
                      <span className="manche-emoji">🔄</span>
                      <h4>dnilBtseT</h4>
                    </div>
                    <p>
                      Les chansons sont jouées à l'envers. Les joueurs doivent
                      reconnaître la mélodie malgré l'inversion.
                    </p>
                    <div className="points-info">
                      <strong>Points :</strong> +3 pour le titre, +3 pour
                      l'artiste
                    </div>
                  </div>

                  <div className="manche-card">
                    <div className="manche-header">
                      <span className="manche-number">3</span>
                      <span className="manche-emoji">👹</span>
                      <h4>X-trem BlindTest</h4>
                    </div>
                    <p>
                      Les chansons sont déformées avec des effets audio qui
                      changent toutes les 5 secondes. C'est la manche la plus
                      difficile où il faut vraiment avoir une sacrée bonne
                      oreille...
                    </p>
                    <div className="points-info">
                      <strong>Points :</strong> +4 pour le titre, +4 pour
                      l'artiste
                    </div>
                  </div>

                  <div className="points-card malus">
                    <h4>Malus</h4>
                    <ul>
                      <li>
                        <strong>1 point seulement</strong> : Réponse donnée
                        après le temps
                      </li>
                      <li>
                        <strong>-1 point</strong> : Un élément de réponse
                        incorrecte
                      </li>
                      <li>
                        <strong>-2 points</strong> : Règles non-respectées (ex:
                        répondre sans avoir buzzé)
                      </li>
                    </ul>
                  </div>

                  <p className="points-note">
                    Note : Tu peux modifier ces valeurs pour rendre le jeu plus
                    ou moins compétitif.
                  </p>
                </div>
              )}

              {activeTab === "equipes" && (
                <div className="regles-section">
                  <h3>Gestion des équipes</h3>

                  <h4>Création des équipes</h4>
                  <p>
                    Crée autant d'équipes que tu le souhaites en cliquant sur le
                    bouton <i>"Équipes & Scores"</i>. Donne un nom à chaque
                    équipe.
                  </p>

                  <h4>Nombre de joueurs</h4>
                  <p>
                    Il n'y a pas de limite au nombre de joueurs par équipe. Tu
                    peux jouer avec :
                  </p>
                  <ul>
                    <li>Plusieurs équipes de plusieurs joueurs</li>
                    <li>
                      Plusieurs joueurs individuels (chacun étant sa propre
                      "équipe")
                    </li>
                  </ul>

                  <h4>Classement</h4>
                  <p>
                    Le classement des équipes est visible à tout moment en
                    cliquant sur le bouton <i>"Classement"</i>. Les trois
                    premières équipes sont mises en évidence avec des médailles
                    d'or, d'argent et de bronze.
                  </p>

                  <h3>Gestion du temps</h3>

                  <h4>Durée d'écoute</h4>
                  <p>
                    Chaque chanson peut être écoutée pendant un maximum de 25
                    secondes. La réponse doit être donnée durant ce temps
                    imparti pour obtenir tous les points possibles.
                  </p>

                  <h4>Temps de réponse</h4>
                  <p>
                    Après avoir attrapé buzzé, l'équipe dispose de 5 secondes
                    pour donner sa réponse. <br /> Lors de l'utilisation d'un
                    micro-buzzer, si elle ne répond pas correctement, le
                    micro-buzzer est remis en jeu pour les autres équipes.
                  </p>

                  <div className="time-warning">
                    <p>
                      <strong>Astuce :</strong> Pour rendre le jeu plus
                      dynamique, tu peux arrêter la musique dès qu'une équipe
                      buzz ou attrape le micro-buzzer, augmentant ainsi la
                      difficulté.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="regles-footer">
              <p>Amuse-toi bien et que la meilleure équipe gagne !</p>
              <button className="regles-close-button" onClick={closeModal}>
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReglesDuJeu;
