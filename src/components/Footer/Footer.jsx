import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <img src="Logo.jpg" alt="Logo développeur" className="footer-logo" />
      <p className="footer-text">© {currentYear} - Tous droits réservés</p>
    </footer>
  );
};

export default Footer;
