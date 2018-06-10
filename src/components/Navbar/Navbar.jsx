import React from "react";
import Link from "gatsby-link";
import config from "../../../data/SiteConfig";
import UserLinks from "../UserLinks/UserLinks";
import "./Navbar.css";

const Navbar = (props) => {
  const { displayLogo } = props
  const logo = (shouldDisplaylogo) => {
    if (!shouldDisplaylogo) return null
    return(
      <div>
        Logo stand-in
      </div>
    )
  }

  return (
    <header className="navbar">
      { logo(displayLogo) }
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/writing">Writing</Link>
      <Link to="/blog">Blog</Link>
      <UserLinks config={config} labeled />
    </header>
  );
}

export default Navbar;
