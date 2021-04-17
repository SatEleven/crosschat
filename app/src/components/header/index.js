import React from "react";
import stylesheet from "./header.module.scss";
import logoUrl from "../../media/hackathonlogo.png";
const Header = () => {
  const currentRoute = window.location.pathname;

  function Navigation() {
    if (currentRoute === "/profile" || currentRoute === "/chat") {
      return (
        <>
          <li>
            <a className={stylesheet.hyperlinkList} href="/chat">
              Chat
            </a>
          </li>
          <li>
            <a className={stylesheet.hyperlinkList} href="/profile">
              Profile
            </a>
          </li>
          <li>
            <a className={stylesheet.hyperlinkList} href="/login">
              Sign out
            </a>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li>
            <a className={stylesheet.hyperlinkList} href="/login">
              Login/Sign up
            </a>
          </li>
        </>
      );
    }
  }

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
          <a className={stylesheet.hyperlinkList} href="/about">
            About
          </a>
        </li>
        <li>
          <a className={stylesheet.hyperlinkList} href="/contact">
            Contact
          </a>
        </li>
        {Navigation()}
      </ul>
    </div>
  );
};
export default Header;
