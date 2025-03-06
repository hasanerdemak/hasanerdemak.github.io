import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <div className="container header-container">
        <h1 className="logo">Hasan Erdem Ak</h1>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#experiences" className="nav-link">
                Experience
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
