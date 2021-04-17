import React from "react";
import "./header.scss";
import logoUrl from "../logo.png";
const Header = () => (
  <div className="header">
    <img className="logoImage" src={logoUrl} alt="LogoImage" />
    <h1 className="logoText">CrossChat</h1>
  </div>
);
export default Header;
