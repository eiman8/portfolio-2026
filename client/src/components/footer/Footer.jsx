import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <h3>Maybituin Portfolio</h3>
          <p>Building modern web applications with React & Node.js</p>
        </div>

        {/* LINKS */}
        {/* <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div> */}

        {/* SOCIAL */}
        <div className="footer-social">
          <a href="https://github.com/eiman8/">GitHub</a>
          <a href="https://www.linkedin.com/in/eimanson-maybituin-a3a5a8157/">
            LinkedIn
          </a>
          {/* <a href="#">Email</a> */}
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Eimanson Maybituin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
