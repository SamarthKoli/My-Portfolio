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
        <p>Hello! I'm a passionate developer with a love for coding and creating innovative solutions.</p>
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
