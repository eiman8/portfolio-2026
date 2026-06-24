import "./navbar.css";
import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaDownload } from "react-icons/fa6";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (section) => {
    setActive(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Spy
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo">Maybituin Portfolio</div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a
              href="#home"
              className={active === "home" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={active === "about" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={active === "projects" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={active === "contact" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
        <a
          href="/resume/MAYBITUIN-RESUME-WEBDEV.pdf"
          download
          className="btn secondary navbar-download"
        >
          <FaDownload className="download-icon" />
          <span className="dl-text">Download Resume</span>
        </a>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
