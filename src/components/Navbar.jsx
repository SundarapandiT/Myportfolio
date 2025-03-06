import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Importing icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          TSP
        </Link>

        {/* Menu Icon for Mobile */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={menuOpen ? "bar open" : "bar"}></div>
            <div className={menuOpen ? "bar open" : "bar"}></div>
            <div className={menuOpen ? "bar open" : "bar"}></div>
          </div>
          <nav className={`nav ${menuOpen ? "active" : ""}`}>
            <ul className="nav-list">
              <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li><Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
              <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
              <li><Link to="/resume" onClick={() => setMenuOpen(false)}>Resume</Link></li>
              <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </ul>
          </nav>
      </div>
    </nav>
  );
};

export default Navbar;
