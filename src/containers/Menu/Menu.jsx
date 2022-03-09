import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";
const Menu = (props) => {
  return (
    <>
      <Link className="link" to="/skills">
        Skills
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
      {/* <Link className="link" to="/contact">
        Contact
      </Link> */}
    </>
  );
};
export default Menu;
