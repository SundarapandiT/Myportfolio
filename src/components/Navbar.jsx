import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar">
        <a onClick={() => scrollToSection("home")}>Home</a>
      <a onClick={() => scrollToSection("about")}>About</a>
      <a onClick={() => scrollToSection("skills")}>Skills</a>
      <a onClick={() => scrollToSection("projects")}>Projects</a>
      <a onClick={() => scrollToSection("resume")}>Resume</a>
      <a onClick={() => scrollToSection("contact")}>Contact</a>
    </nav>
  );
};

export default Navbar;
