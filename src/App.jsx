import { HashRouter, Route, Routes } from "react-router-dom";
import Accueil from "./components/Accueil";
import Jeu from "./components/Jeu";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/jeu" element={<Jeu />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
