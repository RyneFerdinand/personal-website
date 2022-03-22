import "./Header.css";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  const updateShowNav = () => {
    if (window.innerWidth <= 1024) {
      setShowNav((prevShowNav) => !prevShowNav);
    }
  };

  return (
    <div id="header">
      <div className="header__logo">
        <b>R</b>F
      </div>
      <GiHamburgerMenu className="hamnav" onClick={updateShowNav} />
      <nav
        id="nav"
        className={!showNav && window.innerWidth <= 1024 ? "hide-nav" : ""}
      >
        <Link
          to="project"
          smooth={true}
          className="nav-item"
          onClick={updateShowNav}
        >
          Projects
        </Link>
        <Link
          to="skills"
          smooth={true}
          className="nav-item"
          onClick={updateShowNav}
        >
          Skills
        </Link>
        <button className="contact-button" onClick={updateShowNav}>
          Contact Me
        </button>
      </nav>
    </div>
  );
}
