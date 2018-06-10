import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import "./UserLinks.css";

class UserLinks extends Component {

  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link => (
      <a key={link.label} href={link.url}>
        <FontAwesome name={link.iconName} />
      </a>
    ));
  }

  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
