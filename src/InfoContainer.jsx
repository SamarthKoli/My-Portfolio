import React, { useState } from "react";

function AboutMeButton() {
  const [activeSection, setActiveSection] = useState(null);

  const handleToggle = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="info-container" style={{ textAlign: "center" }}>
      <button
        className="AboutMeButton"
        onClick={() => handleToggle("aboutMe")}

      >
        About Me
      </button>
      <div
        className={`dropdown-content ${
          activeSection === "aboutMe" ? "show" : ""
        }`}
      >
        <p>

👋 Welcome to My Portfolio!
I’m Samarth Koli, a passionate and dedicated Computer Science enthusiast currently pursuing my B.Tech in CSE at Walchand Institute of Technology, Solapur. My journey in technology began with a Diploma in CSE from A.G. Patil Polytechnic, Solapur, where I built a solid foundation in programming and problem-solving.

This portfolio showcases my projects, skills, and achievements as I explore the ever-evolving tech world. Whether it's coding, creating innovative solutions, or collaborating on impactful ideas, I’m always eager to push boundaries and grow.

Feel free to explore my work and reach out if you'd like to connect!</p>

      </div>

      <button
        className="AboutMeButton"
        onClick={() => handleToggle("projects")}
      >
        Projects
      </button>
      <div
        className={`dropdown-content ${
          activeSection === "projects" ? "show" : ""
        }`}
      >
        <p>Some of my projects include a Movie Rating Website and WatchMe, a VS Code extension.</p>
      </div>

      <button
        className="AboutMeButton"
        onClick={() => handleToggle("achievements")}
      >
        Achievements
      </button>
      <div
        className={`dropdown-content ${
          activeSection === "achievements" ? "show" : ""
        }`}
      >
        <p>I was a Technical Content Writer Intern at GeeksforGeeks and contributed numerous technical articles.</p>
      </div>
    </div>
  );
}

export default AboutMeButton;
