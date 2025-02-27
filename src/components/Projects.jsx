import React from "react";

const projects = [
  {
    name: "Basic Banking System",
    image: "./portfolio/bankingsystemUI.png",
    link: "https://yourbankingsystem.com", // Change this to your project URL
    description: "Experienced in designing and developing basic banking systems...",
  },
  {
    name: "Two Wheeler Service Slot Booking App",
    image: "./portfolio/RRtvs-ui.png",
    link: "https://yourservicebookingapp.com", // Change this to your project URL
    description: "RR TVS Services (Coimbatore) Two-wheeler Service slot booking app...",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} className="project-image" />
            </a>
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
