import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-footer">
        <p>&copy; {currentYear} Zézim</p>
      </div>
    </footer>
  );
}

export default Footer;
