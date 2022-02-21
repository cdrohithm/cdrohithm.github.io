import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.scss";
const SearchBox = (props) => {
  const [focused, setFocused] = useState(false);
  useEffect(() => {
    window.addEventListener("click", unFocus);

    return () => window.removeEventListener("click", unFocus);
  }, []);

  const setFocus = () => {
    let searchInputs = document.getElementById("header-input-text");
    let searchIcon = document.getElementById("header-search-button");
    console.log(searchIcon);
    searchInputs.classList.add("focus");
    searchInputs.focus();
    searchIcon.classList.add("hide");
    setFocused(true);
    console.log(focused);
  };
  const unFocus = (evt) => {
    const headerSearchButton = document.getElementById("header-search-button");
    const headerInputText = document.getElementById("header-input-text");
    if (
      !headerSearchButton.contains(evt.target) &&
      !headerInputText.contains(evt.target)
    ) {
      document.getElementById("header-input-text")?.classList.remove("focus");
      document.getElementById("header-search-button")?.classList.remove("hide");
    }
    setFocused(false);
  };
  console.log(focused);
  return (
    <div className="search-box">
      <Input id="header-input-text" placeholder="Search" />
      <Button
        id="header-search-button"
        className="search-button"
        onClick={() => setFocus()}
      >
        <SearchIcon />
      </Button>
    </div>
  );
};
export default SearchBox;
