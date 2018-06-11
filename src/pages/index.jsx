import React from "react"
import Helmet from "react-helmet"
import config from "../../data/SiteConfig"
import Logo from "../components/Logo/Logo"
import "./index.css"

const Index = () => {
  return(
    <div className="index-container">
      <Helmet title={config.siteTitle} />
      <Logo />
    </div>
  )
}

export default Index;
