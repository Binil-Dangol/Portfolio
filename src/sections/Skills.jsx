import React from "react";
import styles from "../css/skills.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaFigma,
} from "react-icons/fa";

import { RiTailwindCssFill } from "react-icons/ri";

import { SiCanva } from "react-icons/si";

import { DiMongodb } from "react-icons/di";

import { SiExpress } from "react-icons/si";

const frontendSkills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React", icon: <FaReact /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <DiMongodb /> },
  { name: "Java", icon: <FaJava /> },
  { name: "SQL", icon: <FaDatabase /> },
];

const designSkills = [
  { name: "Figma", icon: <FaFigma /> },
  { name: "Canva", icon: <SiCanva /> },
];

const Skills = () => {
  return (
    <div style={{ height: "auto" }}>
      <h1>Skills</h1>
      <p className={styles.intro}>
        I am proficient in HTML, CSS, JavaScript, and React.js—skills honed through hands-on MERN stack and React.js projects. I also possess foundational knowledge in other essential technologies and design tools from my academic experience, and I’m always eager to expand my expertise as needed.
      </p>
      
      <div className={styles.category}>
        <h2>Frontend</h2>
        <div className={styles.skillsContainer}>
          {frontendSkills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <div className={styles.icon}>{skill.icon}</div>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.category}>
        <h2>Backend</h2>
        <div className={styles.skillsContainer}>
          {backendSkills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <div className={styles.icon}>{skill.icon}</div>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.category}>
        <h2>Design Tools</h2>
        <div className={styles.skillsContainer}>
          {designSkills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <div className={styles.icon}>{skill.icon}</div>
              <span className={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;