import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

const Index = () => {
  return(
    <div className="index-container">
      <Helmet title={config.siteTitle} />
      <h1>williardx<span className="index-period">.</span></h1>
    </div>
  )
}

export default Index;
