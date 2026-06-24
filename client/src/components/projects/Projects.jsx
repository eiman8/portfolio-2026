const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "Admin dashboard with sales analytics, authentication, and role-based access.",
      tech: ["React", "Node.js", "Prisma"],
    },
    {
      title: "Task Management App",
      description:
        "Full-stack task tracker with drag & drop and real-time updates.",
      tech: ["React", "Express", "PostgreSQL"],
    },
    {
      title: "Portfolio Website",
      description:
        "Modern developer portfolio with glass UI, animations, and responsive design.",
      tech: ["React", "CSS", "Vite"],
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
