import { useState, useEffect, React } from "react";
import { FaDownload } from "react-icons/fa6";

import "./hero.css";

const Hero = () => {
  const words = [
    "Modern Web Applications",
    "React & Node.js Apps",
    "Clean UI Experiences",
    "Full-Stack Solutions",
  ];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const current = words[index % words.length];

    const updateText = () => {
      if (isDeleting) {
        setText(current.substring(0, text.length - 1));
        setSpeed(50);
      } else {
        setText(current.substring(0, text.length + 1));
        setSpeed(100);
      }

      // switch states
      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
      }
    };

    const timer = setTimeout(updateText, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="badge">Open to Junior Web Developer Opportunities</p>

        <h1>
          Building <span className="typewriter">{text}</span>
          <span className="cursor">|</span>
        </h1>

        <p className="subtitle">
          I’m an aspiring web developer focused on building clean, responsive,
          and scalable web applications using modern JavaScript technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>

          {/* <a href="#contact" className="btn secondary">
            Contact Me
          </a> */}
          <a
            href="/resume/MAYBITUIN-RESUME-WEBDEV.pdf"
            download
            className="btn secondary dl-button"
          >
            <FaDownload className="download-icon" />
            <span className="dl-text">Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
