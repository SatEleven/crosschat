import React from "react";
import stylesheet from "./header.module.scss";
import logoUrl from "../../media/hackathonlogo.png";
const Header = () => (
  <div className={stylesheet.header}>
    <img className={stylesheet.logoImage} src={logoUrl} alt="LogoImage" />
    <h1 className={stylesheet.logoText}>CrossChat</h1>
  </div>
);
export default Header;
