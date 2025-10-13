import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';

const Resume = () => {
  const resumeUrl = `/Sundarapandi_resume-work(oct).pdf`;

  return (
    <section id="resume">
      <h2>Resume</h2>
      <p className="resume-intro">
        Curious about my journey? 📜 Explore my experience, skills, and projects in detail.  
        Feel free to <b>view</b> or <b>download</b> my resume below! 🚀
      </p>
      <div className="resume-buttons">
        <a href={resumeUrl} download className="resume-btn">
          <FaDownload size={20} /> Download Resume
        </a>
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-btn view">
          <FaEye size={20} /> View Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
