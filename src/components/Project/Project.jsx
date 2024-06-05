import React from "react";
import "./project.css";
import BlogImage from "../../assets/blog.png"
import EnglishDirectory from "../../assets/english-directory.png"

const projectList = [
  {
    id: 1,
    title: "Green Store",
    description: "",
    image: "https://i.imgur.com/XqQXQZb.jpg",
    github: "",
    liveDemo: "",
  },
  {
    id: 2,
    title: "Blog",
    description: "",
    image: BlogImage,
    github: "",
    liveDemo: "https://pttlinh-blog.vercel.app/",
  },
  {
    id: 3,
    title: "English Directory",
    description: "",
    image: EnglishDirectory,
    github: "",
    liveDemo: "https://english-dictionary-neon.vercel.app/",
  },
];
const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        {projectList.map((pj) => {
          return (
            <article className="project__item" key={pj.id}>
              <div className="project__item-img">
                <img src={pj.image} alt="project" srcSet="" />
                <h3>{pj.title}</h3>
                <div className="project__item-cta">
                  <a
                    href={pj.github}
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={pj.liveDemo}
                    target="_blank"
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
