import React from "react";
import logo from "../../logo.svg";
import "./styles.scss";

const Header = () => (
  <header className="global-header">
    <div className="global-header__inner">
      <img src={logo} alt="" />
      <h1>Record Roulette</h1>
      <a href="mailto:djuta.software@gmail.com">Contact</a>
    </div>
  </header>
);

export default Header;
