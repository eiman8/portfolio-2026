import "./stack.css";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiVite,
} from "react-icons/si";

const technologies = [
  {
    icon: <SiHtml5 color="#E34F26" />,
    name: "HTML5",
  },
  {
    icon: <SiCss color="#1572B6" />,
    name: "CSS3",
  },
  {
    icon: <SiJavascript color="#F7DF1E" />,
    name: "JavaScript",
  },
  {
    icon: <SiReact color="#61DAFB" />,
    name: "React",
  },
  {
    icon: <SiNodedotjs color="#339933" />,
    name: "Node.js",
  },
  {
    icon: <SiExpress color="#FFFFFF" />,
    name: "Express",
  },
  {
    icon: <SiPostgresql color="#336791" />,
    name: "PostgreSQL",
  },
  {
    icon: <SiPrisma color="#5A67D8" />,
    name: "Prisma",
  },
  {
    icon: <SiGit color="#F05032" />,
    name: "Git",
  },
  {
    icon: <SiGithub color="#FFFFFF" />,
    name: "GitHub",
  },
  {
    icon: <SiVite color="#646CFF" />,
    name: "Vite",
  },
];

const TechStack = () => {
  return (
    <section className="tech-stack">
      <div className="tech-stack-slider">
        <div className="marquee-track">
          {[...technologies, ...technologies].map((item, index) => (
            <div className="tech-card" key={index}>
              <div className="icon">{item.icon}</div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
