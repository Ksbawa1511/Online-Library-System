import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on navigation
  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Left: Title */}
        <div className="navbar-title">Online Library System</div>
        {/* Center: Theme Toggle */}
        <div className="navbar-center">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        {/* Hamburger Icon */}
        <button
          className="hamburger-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        {/* Right: Links */}
        <ul className={`nav-links${menuOpen ? ' open' : ''}`} onClick={handleNavClick}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Browse Books</Link></li>
          <li><Link to="/add-book">Add Book</Link></li>
          <li>
            <a
              href="https://github.com/Ksbawa1511"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="github-link"
              style={{ display: 'flex', alignItems: 'center', fontSize: '1.3rem', marginLeft: '0.5rem' }}
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 