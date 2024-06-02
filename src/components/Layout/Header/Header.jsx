import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src="logo.png" alt="Logo" className="logo" />
      <>
        <Link to="/" className="text-router">
          Zézim, o aumigão da gente.
        </Link>
      </>
      <button className="button">Entrar</button>
    </header>
  );
}

export default Header;
