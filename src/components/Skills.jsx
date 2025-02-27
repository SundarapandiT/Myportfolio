import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaDatabase, FaCuttlefish, FaReact, FaUsers, FaLightbulb, FaPenNib, FaKeyboard, FaTools, FaClipboardList } from "react-icons/fa";

const Skills = () => {
  const techSkills = [
    { name: "HTML", icon: <FaHtml5 color="#E34F26" size={40} /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" size={40} /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" size={40} /> },
    { name: "React", icon: <FaReact color="#61DAFB" size={40} /> },
    { name: "Python", icon: <FaPython color="#3776AB" size={40} /> },
    { name: "Java", icon: <FaJava color="#007396" size={40} /> },
    { name: "SQL", icon: <FaDatabase color="#4479A1" size={40} /> },
    { name: "C/C++", icon: <FaCuttlefish color="#00599C" size={40} /> },
  ];

  const softSkills = [
    { name: "Teamwork", icon: <FaUsers color="#32f514" size={40} /> },
    { name: "Creativity", icon: <FaLightbulb color="#FFD700" size={40} /> },
    { name: "Design", icon: <FaPenNib color="#FF69B4" size={40} /> },
    { name: "Typewriting", icon: <FaKeyboard color="#00BFFF" size={40} /> },
    { name: "Problem-Solving", icon: <FaTools color="#FFA500" size={40} /> },
    { name: "Time Management", icon: <FaClipboardList color="#FF4500" size={40} /> },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>

      {/* Tech Skills */}
      <div className="skills-category">
        <h3>Technical Skills</h3>
        <div className="skills-grid">
          {techSkills.map(skill => (
            <div key={skill.name} className="skill-item">
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="skills-category">
        <h3>Soft Skills</h3>
        <div className="skills-grid">
          {softSkills.map(skill => (
            <div key={skill.name} className="skill-item">
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
