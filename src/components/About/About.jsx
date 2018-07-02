import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>
          My name is Will Doenlen. I'm an artist and software engineer living in New York. I currently work at <a href="https://www.artsy.net">Artsy</a>. I went to school at <a href="http://web.mit.edu/">MIT</a>.
        </h1>
      </div>
    );
  }
}

export default About;
