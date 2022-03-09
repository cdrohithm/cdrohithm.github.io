import React from "react";
import "./Body.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCss3Alt, FaLinux, FaReact } from "react-icons/fa";
import { SiGraphql, SiJavascript, SiRedux } from "react-icons/si";
import { AiFillWindows } from "react-icons/ai";
import { DiCss3, DiGit, DiJavascript1 } from "react-icons/di";
import { AiFillHtml5, AiOutlineConsoleSql } from "react-icons/ai";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import About from "../About/About";
import "../../logo.svg";
const Body = (props) => {
  return (
    <>
      <div className="home">
        <div className="home-container">
          <h1>Hi, I am Rohith</h1>
          <p>
            I am an experienced frontend developer, building interactive web
            applications. I am currently interested in React, JavaScript, SQL.
          </p>
        </div>
      </div>
    </>
  );
};

export default Body;
