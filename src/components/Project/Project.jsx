import React from "react";
import "./project.css";
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
    title: "Green Store",
    description: "",
    image: "https://i.imgur.com/XqQXQZb.jpg",
    github: "",
    liveDemo: "",
  },
  {
    id: 3,
    title: "Green Store",
    description: "",
    image: "https://i.imgur.com/XqQXQZb.jpg",
    github: "",
    liveDemo: "",
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
                <img src={pj.image} alt="project" />
                <h3>Green Store</h3>
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
