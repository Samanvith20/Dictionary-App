import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Import the Font Awesome icons

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://www.linkedin.com/in/yervala-samanvith-reddy-60568b1b0/" target="__blank">
          Yervala Samanvith Reddy
        </a>
      </span>
      <div className="iconContainer">
        <a href="https://twitter.com/yervala9972" target="__blank">
          <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
        </a>
        <a href="https://github.com/Samanvith20" target="__blank">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/yervala-samanvith-reddy-60568b1b0/" target="__blank">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
