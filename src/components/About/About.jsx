import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About' />
          </div>
        </div>
        <div className='about__content'>
      

          <p>
            I am developer with 2 years of experience in ReactJS, NextJS,
            ReactNative and NodeJS. Skilled in creating detailed designs and
            fixing cross-browser issues. Enjoys solving front-end problems and
            improving user experiences. Always learning new technologies and
            frameworks. Good at working in a team and on my own.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};
