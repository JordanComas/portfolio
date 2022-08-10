import React from "react";
import { Link } from "react-router-dom";
import ButtonMailto from "./ButtonMailto";
import phone from "../images/phone.png";
import github from "../images/github.png";

const Navbar = () => {
  return (
    <nav>
      <div className="contact-info">
        <h1>Jordan Comas</h1>
        <div className="links">
          <Link to="/">Home</Link>
          {/* <Link to="/about">About Me</Link> */}
        </div>
        <div className="info">
          <ButtonMailto
            label="Jordan.comas001@gmail.com"
            mailto="mailto:jordan.comas001@gmail.com"
          />
          <p>(305)766-6884</p>
          <a
            className="git"
            href="https://github.com/JordanComas"
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
