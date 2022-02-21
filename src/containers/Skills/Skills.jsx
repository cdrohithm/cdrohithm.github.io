import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCss3Alt, FaLinux, FaReact } from "react-icons/fa";
import { SiGraphql, SiJavascript, SiRedux } from "react-icons/si";
import { AiFillWindows } from "react-icons/ai";
import { DiCss3, DiGit, DiJavascript1 } from "react-icons/di";
import { AiFillHtml5, AiOutlineConsoleSql } from "react-icons/ai";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import "./Skills.scss";
const Skills = (props) => {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills">
        <AiFillHtml5 className="react-icon" />
        <DiCss3 className="react-icon" />
        <IoLogoJavascript className="react-icon" />
        <FaSass className="react-icon" />
        <SiGraphql className="react-icon" />
        <FaReact className="react-icon rotate" />
        <SiRedux className="react-icon" />
        <DiGit className="react-icon" />
        <AiOutlineConsoleSql className="react-icon" />
        <AiFillWindows className="react-icon" />
        <FaLinux className="react-icon" />
        {/* </div> */}

        {/* hi */}
        {/* <img src="./public/logo192.png" /> */}
        {/* <p>
        HTML CSS SASS GraphQL React Redux JavaScript Git SQL Windows
        Linux */}
        {/* </p> */}
      </div>
    </div>
  );
};

export default Skills;
