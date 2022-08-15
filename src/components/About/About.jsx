import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { BsFillAwardFill } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { VscFolderLibrary } from "react-icons/vsc";
export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsFillAwardFill className="about__icon" />
              <h5>Experience</h5>
            </article>
            <article className="about__card">
              <BiUser className="about__icon" />
              <h5>Experience</h5>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            explicabo molestiae qui iste mollitia alias quas inventore, hic,
            dolor illum voluptatem. Consectetur esse ullam provident ipsum
            dignissimos minus iusto saepe!
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};
