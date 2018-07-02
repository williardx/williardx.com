import React from "react";
import Link from "gatsby-link";
import config from "../../../data/SiteConfig";
import UserLinks from "../UserLinks/UserLinks";
import "./Navbar.css";
import Logo from "../Logo/Logo";

const Navbar = (props) => {
  const { displayLogo } = props
  const logo = (shouldDisplaylogo) => {
    if (!shouldDisplaylogo) return null
    return(
      <Logo />
    )
  }

  return (
    <header className="navbar">
      { logo(displayLogo) }
      <UserLinks config={config} />
    </header>
  );
}

export default Navbar;
