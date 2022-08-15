import React from "react";
import CV from "../../assets/PhanTranTheLinh_CV.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn btn-creative" download>
        Download CV
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
