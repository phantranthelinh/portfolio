/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Phan Tran The Linh
      </a>
      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="socials">
        <a href="https://www.facebook.com/thelinh.info">
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/in/linh-phan-3a3162241/">
          <AiFillLinkedin />
        </a>
      </div>
      <div className="copyright">
        <small>&copy; Phan Tran The Linh. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
