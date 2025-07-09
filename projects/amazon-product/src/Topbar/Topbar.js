import React from "react";
import classes from "./Topbar.module.css";
import logo from "./amazon-logo-transparent.png";

const Topbar = () => {
  return (
    <header>
      <nav className={classes.Topbar}>
        <img src={logo} alt="Amazon-logo" />
      </nav>
    </header>
  );
};

export default Topbar;
