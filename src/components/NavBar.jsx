import { useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/navbar.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        Kat's Books
      </Link>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/goodreads" onClick={closeMenu}>Goodreads</Link></li>
        <li><Link to="/instagram" onClick={closeMenu}>Instagram</Link></li>
      </ul>
    </nav>
  );
}
