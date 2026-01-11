
import React, { useState, useEffect } from "react";
import "./Header.css";
import { FaGithub, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [activeMenu, setActiveMenu] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setMenuOpen(false);
  };

  return (
    <header className={`hero ${scrolled ? "scrolled-nav-active" : ""}`}>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">Anvi's Portfolio</div>

        <div className={`menu ${menuOpen ? "menu-open" : ""}`}>
          {["Home", "Skill", "About", "Project", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={activeMenu === item ? "active" : ""}
              onClick={() => handleMenuClick(item)}
            >
              {item}
            </a>
          ))}

          {/* Social icons */}
          <div className="social-icons">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="github-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="linkedin-icon"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      <div className="hero-content">
        <h2 data-aos="fade-down">
          Hello I'm, <big>Anvi Gadhiya</big>
        </h2>

        <div className="text1" data-aos="fade-left" data-aos-delay="200">
          I’m a passionate Web Developer who loves turning ideas into clean,
          functional, <br />
          and user-friendly websites. I design and develop responsive
          websites that deliver real <br />
          user experiences.
        </div>

        <div className="hero-buttons">
          <button className="btn-view">View My Work</button>
          <a href="/cv/Resume.pdf" download className="download-btn">
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

