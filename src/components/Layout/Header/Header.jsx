import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <img src="logo.png" alt="Logo" className="logo" />
      {location.pathname === "/products" ? (
        <>
          <Link to="/" className="text-router">
            Zézim, o aumigão da gente.
          </Link>
        </>
      ) : (
        <p>Zézim, o aumigão da gente.</p>
      )}
      <button className="button">Entrar</button>
    </header>
  );
}

export default Header;
