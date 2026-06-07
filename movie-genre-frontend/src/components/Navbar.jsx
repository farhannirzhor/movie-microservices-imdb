import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        🎬 <span>CineBase</span>
      </Link>
      <div className="navbar-links">
        <Link to="/" className={pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link to="/genres" className={pathname.startsWith("/genres") ? "active" : ""}>
          Genres
        </Link>
        <Link to="/movies" className={pathname === "/movies" ? "active" : ""}>
          Movies
        </Link>
      </div>
    </nav>
  );
}
