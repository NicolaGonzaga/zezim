import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src="logo.png" alt="Logo" className="logo" />
      </Link>
      <p>Zézim, o aumigão da gente.</p>
      <button className="button">Entrar</button>
    </header>
  );
}

export default Header;
