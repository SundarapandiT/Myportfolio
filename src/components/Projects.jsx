import React from "react";

const projects = [
  {
    name: "Basic Banking System",
    image: "./portfolio/bankingsystemUI.png",
    link: "", // Change this to your project URL
    description: "Experienced in designing and  Developed user-friendly banking systems (HTML, CSS, PHP, MySQL, JS and using WAMP server)(tested with dummy data)",
  },
  {
    name: "Weather Finder",
    image: "",
    link: "", // Change this to your project URL
    description: "This project is a simple weather application that fetches and displays weather data for a user-specified city using the OpenWeatherMap API.",
  },
  {
    name: "Dreamik Customisable label shopping ecommerce",
    image: "",
    link: "https://www.dreamik.com", // Change this to your project URL
    description: "Developed an e-commerce website using React. Contributed to Dreamik.com, a platform for ordering customized labels",
  },
  {
    name: "Two Wheeler Service Slot Booking App Design",
    image: "",
    link: "", // Change this to your project URL
    description: "UI for booking bike service (TVS), and request roadside assistance and optionally emergency button.",
  },
  {
    name: "Music Suggestion web app",
    image: "",
    link: "", // Change this to your project URL
    description: " based on facial emotions Using React, Python Ai-model for emotion detection.(Final Year Project) working on",
  },
  {
    name: "BMI calculator",
    image: "",
    link: "", // Change this to your project URL
    description: "  Built this Android app Using Android Studio, calculating BMI and offering personalized fitness suggestions based on the results.",
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
