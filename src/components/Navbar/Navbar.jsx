import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link className={styles.title} to="/portfolio">
        Portfolio
      </Link>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <Link to="/portfolio/about">About</Link>
          </li>
          <li>
            <Link to="/portfolio/experience">Experience</Link>
          </li>
          <li>
            <Link to="/portfolio/projects">Projects</Link>
          </li>

          <li>
            <Link to="/portfolio/certificate">Certificates</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
