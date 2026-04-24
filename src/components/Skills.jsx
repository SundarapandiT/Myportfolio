import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaDatabase, FaReact, FaGitAlt, FaLinux } from "react-icons/fa";
import { SiNodedotjs, SiExpress, SiDocker, SiPostgresql, SiMysql, SiTypescript } from "react-icons/si";

const categories = [
  {
    name: "Frontend",
    skills: [
      { name: "React.js",     icon: <FaReact color="#61DAFB" size={40} />,    color: "#61DAFB" },
      { name: "JavaScript",   icon: <FaJs color="#F7DF1E" size={40} />,       color: "#F7DF1E" },
      { name: "TypeScript",   icon: <SiTypescript color="#3178C6" size={40} />, color: "#3178C6" },
      { name: "HTML5",        icon: <FaHtml5 color="#E34F26" size={40} />,    color: "#E34F26" },
      { name: "CSS3",         icon: <FaCss3Alt color="#1572B6" size={40} />,  color: "#1572B6" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js",      icon: <SiNodedotjs color="#339933" size={40} />, color: "#339933" },
      { name: "Express.js",   icon: <SiExpress color="#ffffff" size={40} />,   color: "#cccccc" },
      { name: "Python",       icon: <FaPython color="#3776AB" size={40} />,    color: "#3776AB" },
      { name: "REST APIs",    icon: <FaDatabase color="#FF6B6B" size={40} />,  color: "#FF6B6B" },
    ],
  },
  {
    name: "Database & DevOps",
    skills: [
      { name: "SQL",          icon: <FaDatabase color="#4479A1" size={40} />,   color: "#4479A1" },
      { name: "PostgreSQL",   icon: <SiPostgresql color="#336791" size={40} />, color: "#336791" },
      { name: "MySQL",        icon: <SiMysql color="#4479A1" size={40} />,      color: "#4479A1" },
      { name: "Docker",       icon: <SiDocker color="#2496ED" size={40} />,     color: "#2496ED" },
      { name: "Linux",        icon: <FaLinux color="#FCC624" size={40} />,      color: "#FCC624" },
      { name: "Git",          icon: <FaGitAlt color="#F05032" size={40} />,     color: "#F05032" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      {categories.map((cat) => (
        <div key={cat.name} className="skills-category">
          <h3>{cat.name}</h3>
          <div className="skills-grid">
            {cat.skills.map((skill) => (
              <div
                key={skill.name}
                className="skill-item"
                style={{ "--skill-color": skill.color }}
              >
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
