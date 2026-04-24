import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>
        I'm a passionate <strong>Full Stack Developer</strong> with hands-on experience building end-to-end web
        applications using <strong>React.js, Node.js, Express.js, Python</strong>, and <strong>SQL</strong>.
        I thrive on turning complex problems into clean, scalable solutions — from responsive React UIs to
        robust REST APIs, optimised SQL databases, and containerised deployments with <strong>Docker</strong> on <strong>Linux</strong>.
        I embrace modern DevOps practices and version control with Git to deliver production-ready software.
      </p>

      <h3>Why Choose Me?</h3>
      <ul className="about-details">
        <li>
          <strong>Full Stack Expertise:</strong> End-to-end ownership — React frontends, Node/Express APIs,
          SQL databases, and Docker-based deployments.
        </li>
        <li>
          <strong>Backend Engineering:</strong> Build scalable RESTful APIs with Node.js &amp; Express.js,
          wired to PostgreSQL/MySQL with optimised queries.
        </li>
        <li>
          <strong>DevOps Mindset:</strong> Containerise with Docker, automate on Linux, manage code with Git —
          reliable, reproducible environments every time.
        </li>
        <li>
          <strong>Python Versatility:</strong> Script automation, data processing, and backend logic with Python
          for both web and non-web use cases.
        </li>
        <li>
          <strong>Problem-solver:</strong> Tackle real-world challenges with clean architecture,
          from complex SQL queries to asynchronous Node.js flows.
        </li>
        <li>
          <strong>Detail-oriented:</strong> Write maintainable, secure code with a focus on
          performance, scalability, and developer experience.
        </li>
      </ul>
    </section>
  );
};

export default About;
