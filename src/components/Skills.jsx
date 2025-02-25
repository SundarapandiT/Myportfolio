import React from 'react'

const Skills = () => {
  return (
    <section id="skills">
    <h2>Skills</h2>
    <ul>
      {[
        { name: "HTML", level: "90%" },
        { name: "CSS", level: "85%" },
        { name: "JavaScript", level: "70%" },
        { name: "Python", level: "75%" },
        { name: "Java", level: "65%" },
        { name: "SQL", level: "70%" },
        { name: "C/C++", level: "75%" },
      ].map(skill => (
        <li key={skill.name}>
          {skill.name}
          <div className="skill-bar">
            <div className="skill-level" style={{ width: skill.level }}>{skill.level}</div>
          </div>
        </li>
      ))}
    </ul>
  </section>
  )
}

export default Skills