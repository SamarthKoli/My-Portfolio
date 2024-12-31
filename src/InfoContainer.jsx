import React, { useState, useEffect, useRef } from "react";
import reactimg from './assets/react-original-wordmark.svg';
import JSimg from './assets/javascript-original.svg';
import pythonimg from './assets/python-original.svg';
import javaimg from './assets/java-original.svg';
import mysqlimg from './assets/mysql-original-wordmark.svg';
import nodejsimg from './assets/nodejs-original-wordmark.svg';
import spimg from './assets/springboot.svg';
import aboutme from './assets/aboutme.png'
import tools from './assets/tools.png'
import badge from './assets/achievement.png'
import project from './assets/project.png';


function AboutMeButton() {
  const [activeSection, setActiveSection] = useState(null);
  const sliderRef = useRef(null);

  const handleToggle = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  // Auto vertical scroll logic
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const scrollStep = 0.7; // Speed of scrolling
    const intervalTime = 20; // Time between scroll steps in ms

    const autoScroll = setInterval(() => {
      if (scrollAmount < slider.scrollHeight - slider.offsetHeight) {
        scrollAmount += scrollStep;
      } else {
        scrollAmount = 0; // Reset to the start
      }
      slider.scrollTop = scrollAmount;
    }, intervalTime);

    // Clean up on component unmount
    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="info-container" style={{ textAlign: "center" }}>
      {/* About Me Button */}
      <button
        className="AboutMeButton"
        onClick={() => handleToggle("aboutMe")}
      >
        About Me
        <img src={aboutme} alt="AboutMeImage" />
      </button>
      <div
        className={`dropdown-content ${activeSection === "aboutMe" ? "show" : ""}`}
      >
        <p>
          👋 Welcome to My Portfolio!  
          I’m Samarth Koli, a passionate and dedicated Computer Science
          enthusiast currently pursuing my B.Tech in CSE at Walchand Institute
          of Technology, Solapur. My journey in technology began with a Diploma
          in CSE from A.G. Patil Polytechnic, Solapur, where I built a solid
          foundation in programming and problem-solving.  
          This portfolio showcases my projects, skills, and achievements as I
          explore the ever-evolving tech world. Whether it's coding, creating
          innovative solutions, or collaborating on impactful ideas, I’m always
          eager to push boundaries and grow.  
          Feel free to explore my work and reach out if you'd like to connect!
        </p>
      </div>

      {/* Languages and Tools Button */}
      <button
        className="AboutMeButton"
        onClick={() => handleToggle("languagesAndTools")}
      > 
        <img src={tools} alt="Langauage and tools" />
        Languages and Tools
      </button>
      <div
        className={`dropdown-content ${activeSection === "languagesAndTools" ? "show" : ""}`}
      >
        <p>Here are some of the languages and tools I have worked with:</p>
        <div className="slider" ref={sliderRef}>
          <div className="slider-item">
            <img src={reactimg} alt="React" />
            <p>React</p>
          </div>
          <div className="slider-item">
            <img src={JSimg} alt="JavaScript" />
            <p>JavaScript</p>
          </div>
          <div className="slider-item">
            <img src={pythonimg} alt="Python" />
            <p>Python</p>
          </div>
          <div className="slider-item">
            <img src={javaimg} alt="Java" />
            <p>Java</p>
          </div>
          <div className="slider-item">
            <img src={spimg} alt="SpringBoot" />
            <p>SpringBoot</p>
          </div>
          <div className="slider-item">
            <img src={mysqlimg} alt="MySQL" />
            <p>My SQL</p>
          </div>
          <div className="slider-item">
            <img src={nodejsimg} alt="Node.js" />
            <p>Node.js</p>
          </div>
        </div>
      </div>

      {/* Achievements Button */}
      <button
        className="AboutMeButton"
        onClick={() => handleToggle("achievements")}
      >
        Achievements
        <img src={badge} alt="achievements" />
      </button>
      <div
        className={`dropdown-content ${activeSection === "achievements" ? "show" : ""}`}
      >
        <p>
          Here are some of my key achievements:
        </p>
        <ul>
          <li>Technical Content Writer Intern at GeeksforGeeks</li>
          <li>Contributed numerous technical articles to GeeksforGeeks</li>
          <li>Participated in multiple hackathons and coding competitions</li>
          <li>Successfully built and deployed several personal projects</li>
          <li>Collaborated with cross-functional teams to deliver high-impact solutions</li>
        </ul>
      </div>

      {/* Projects Button */}
      <button
        className="AboutMeButton"
        onClick={() => handleToggle("projects")}
      >
        Projects
        <img src={project} alt="projects" />
      </button>
      <div
        className={`dropdown-content ${activeSection === "projects" ? "show" : ""}`}
      >
        <p>
          Here are some of the projects I have worked on:
        </p>
        <ul>
          <a href="https://datawiz-samarthkoli.streamlit.app/"><li>DataWiz- Streamlined Exploratory Data Analysis (EDA) Tool</li></a>
           <a href="https://github.com/SamarthKoli/Captcha_Backend"> <li>AI Based Captcha Detection System</li></a>
           <a href="https://get-weather-app-kappa.vercel.app/"> <li>Get-Weather Weather forcasting web app</li></a>
        </ul>
      </div>
    </div>
  );
}

export default AboutMeButton;
