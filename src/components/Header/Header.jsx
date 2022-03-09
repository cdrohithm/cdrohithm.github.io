import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import SearchBox from "../SearchBox/SearchBox";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Header.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { Switch } from "@material-ui/core";
import Menu from "../../containers/Menu/Menu";
import { AiOutlineClose } from "react-icons/ai";
const Header = (props) => {
  const [menuVisible, setMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", setVisible);
  }, []);
  const setVisible = () => {
    console.log("width");
    if (window.screen.width <= 820) {
      document
        .getElementsByClassName("mobile-menu-icon")?.[0]
        .classList.add("visible");
    } else {
      console.log("in");
      document
        .getElementsByClassName("mobile-menu-icon")?.[0]
        .classList.remove("visible");
      document
        .getElementsByClassName("mobile-menu")?.[0]
        .classList.remove("visible");
      if (menuVisible) setMenu(false);
    }
  };
  const toggleMenu = () => {
    let menu = document.getElementsByClassName("mobile-menu");
    console.log(menu);
    if (menuVisible) {
      setMenu(false);
      menu[0]?.classList.remove("visible");
    } else {
      setMenu(true);
      menu[0]?.classList.add("visible");
    }
  };
  const [checked, setChecked] = useState(false);
  const handleSwitchChange = () => {
    if (!checked) {
      console.log("checked now");
      let body = document.getElementsByTagName("body");
      if (body) body[0].classList.add("dark");
      setChecked(true);
    } else {
      let body = document.getElementsByTagName("body");
      if (body) body[0].classList.remove("dark");
      setChecked(false);
    }
  };
  return (
    <>
      <div className="header">
        <div className="header-left">
          <Link to="/" className="link">
            Rohith
          </Link>
          <Button
            className="header-button"
            onClick={() =>
              window.open("https://www.linkedin.com/in/cdrohithm/")
            }
          >
            <LinkedInIcon />
          </Button>
          {/* <Switch
            sx={{ m: 1 }}
            checked={checked}
            onChange={handleSwitchChange}
          /> */}
          {/* <p>Header</p> */}
        </div>
        <div className="header-right">
          <div className="menu">
            <div className="menu-items">
              <Menu />
            </div>
            {/* <SearchBox /> */}
          </div>
          <div className="mobile-menu-icon" onClick={() => toggleMenu()}>
            {menuVisible ? (
              <AiOutlineClose className="header-button" />
            ) : (
              <GiHamburgerMenu className="header-button" />
            )}
          </div>
        </div>
        <div className="mobile-menu">
          <Menu />
        </div>
      </div>
    </>
  );
};
export default Header;
