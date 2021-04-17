import React from "react";
import stylesheet from "./header.module.scss";
import logoUrl from "../../media/hackathonlogo.png";
const Header = () => {
  return (
    <div className={stylesheet.header}>
      <div className={stylesheet.logoContainer}>
        <img className={stylesheet.logoImage} src={logoUrl} alt="LogoImage" />
        <h1 className={stylesheet.logoText}>CrossChat</h1>
      </div>
      <ul className={stylesheet.headerList}>
        <li>
          <a className={stylesheet.hyperlinkList} href="/">
            Home
          </a>
        </li>
        <li>
          <a className={stylesheet.hyperlinkList} href="/ContactUs">
            Contact Us
          </a>
        </li>
        <li>
          <a className={stylesheet.hyperlinkList} href="/About">
            About
          </a>
        </li>
        <li>
          <a className={stylesheet.hyperlinkList} href="/Login">
            Login/Sign up
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Header;
