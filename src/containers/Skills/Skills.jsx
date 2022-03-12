import React from "react";
import { FaLinux, FaReact } from "react-icons/fa";
import { SiGraphql, SiJavascript, SiRedux } from "react-icons/si";
import { AiFillWindows } from "react-icons/ai";
import { DiCss3, DiGit, DiJavascript1 } from "react-icons/di";
import { AiFillHtml5, AiOutlineConsoleSql } from "react-icons/ai";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import "./Skills.scss";
import { dividerClasses } from "@mui/material";
const Skills = () => {
  let skills = [
    {
      name: AiFillHtml5, title: "HTML"
    },
    {
      name: DiCss3, title: "CSS"
    },
    {
      name: IoLogoJavascript, title: "JavaScript"
    },
    {
      name: FaSass, title: "Sass"
    },
    {
      name: SiGraphql, title: "GraphQL"
    },
    {
      name: FaReact, title: "React", className: "react-icon rotate"
    },
    {
      name: SiRedux, title: "Redux"
    },
    {
      name: DiGit, title: "Git"
    },
    {
      name: AiOutlineConsoleSql, title: "SQL"
    },
    {
      name: AiFillWindows, title: "Windows"
    },
    {
      name: FaLinux, title: "Linux"
    }
  ]
  const renderSkills = skills => {
    let skillsDiv = [];
    skills.forEach((skill, idx) => {
      skillsDiv.push(
        <div className="skill">
          <skill.name key={idx} className={skill.className || "react-icon"} />
          <span>{skill.title}</span>
        </div>
      )
    })
    return divs;
  }
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills">
        {renderSkills(skills)}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Skills;
