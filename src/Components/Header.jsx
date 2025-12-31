
import React, { useState, useEffect } from "react";
import "./Header.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaLinkedinIn } from "react-icons/fa";


const Header = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="hero">
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <div className="text">Anvi's Portfolio</div>
        </div>

        <div className="menu">
          <a
            href="#"
            className={activeMenu === "Home" ? "active" : ""}
            onClick={() => setActiveMenu("Home")}
          >
            Home
          </a>

          <a
            href="#Skill"
            className={activeMenu === "Skill" ? "active" : ""}
            onClick={() => setActiveMenu("Skill")}
          >
            Skills
          </a>

          <a
            href="#About"
            className={activeMenu === "About" ? "active" : ""}
            onClick={() => setActiveMenu("About")}
          >
            About

          </a>

          <a
            href="#Project"
            className={activeMenu === "Project" ? "active" : ""}
            onClick={() => setActiveMenu("Project")}
          >
            Project
          </a>

          <a
            href="#Contact"
            className={activeMenu === "Contact" ? "active" : ""}
            onClick={() => setActiveMenu("Contact")}
          >
            Contact
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="github-icon"
          >
            <FaGithub />
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </a>
        </div>
      </nav>

      <div className="hero-content">
        <h4>Hello i'm</h4>
        <h2>Anvi Gadhiya</h2>
        <div className="text1">I’m a passionate Web Developer who loves turning ideas into clean, functional, <br></br> and user-friendly websites.I design and develop responsive websites that deliver real  <br></br>user experiences.</div>

        <button class="btn-view">View My Work</button>   <br /><br />
       <a href="/cv/Resume.pdf" download class="download-btn">
          Download CV
        </a> 


      </div>
    </header>
  );
};

export default Header;
