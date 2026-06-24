import "./about.css";
import { useEffect, useRef } from "react";

const About = () => {
  const skillsRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        skillsRef.current.classList.add("animate");

        const counters = skillsRef.current.querySelectorAll(".skill-percent");

        counters.forEach((counter) => {
          const target = +counter.dataset.target;
          let current = 0;

          const increment = target / 50;

          const updateCounter = () => {
            current += increment;

            if (current < target) {
              counter.textContent = `${Math.ceil(current)}%`;
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = `${target}%`;
            }
          };

          updateCounter();
        });

        observer.unobserve(skillsRef.current);
      },
      {
        threshold: 0.4,
      },
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* LEFT SIDE */}
        <div className="about-text">
          <h2>About Me</h2>

          <p>
            I’m a junior web developer focused on building modern, responsive
            and scalable web applications using React, Node.js, and Express.
          </p>

          <p>
            I enjoy turning complex problems into simple, beautiful UI
            experiences and continuously improving my full-stack skills.
          </p>

          <div className="skills">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>PostgreSQL</span>
            <span>Prisma</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        {/* <div className="about-cards">
          <div className="card">
            <h3>Frontend</h3>
            <p>React, Vite, HTML, CSS</p>
          </div>

          <div className="card">
            <h3>Backend</h3>
            <p>Node.js, Express, REST APIs</p>
          </div>

          <div className="card">
            <h3>Database</h3>
            <p>PostgreSQL, Prisma ORM</p>
          </div>
        </div> */}
        <div className="about-right">
          <div className="skills-card" ref={skillsRef}>
            <h3>Technical Skills</h3>

            {[
              { name: "HTML & CSS", level: 80 },
              { name: "JavaScript", level: 70 },
              { name: "React", level: 70 },
              { name: "Node.js", level: 75 },
              { name: "Express.js", level: 75 },
              { name: "PostgreSQL", level: 70 },
              { name: "Git & GitHub", level: 60 },
            ].map((skill) => (
              <div className="skill" key={skill.name}>
                <div className="skill-info">
                  <span>{skill.name}</span>
                  {/* <span>{skill.level}%</span> */}
                  <span className="skill-percent" data-target={skill.level}>
                    0%
                  </span>
                </div>

                <div className="skill-bar">
                  <div
                    className="skill-progress"
                    // style={{ width: `${skill.level}%` }}
                    style={{ "--progress": `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
