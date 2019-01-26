import React from "react";

export default function Skills() {
  return (
    <div className="skills">
      <p className="skill-name">
        {" "}
        <i className="fab fa-html5" /> html
        <span className="percen">70%</span>
      </p>

      <span className="bar">
        <span className="html" />
      </span>

      <p className="skill-name">
        {" "}
        <i className="fab fa-css3-alt" /> css
        <span className="percen">60%</span>
      </p>

      <span className="bar">
        <span className="css" />
      </span>

      <p className="skill-name">
        {" "}
        <i className="fab fa-js" /> javascript
        <span className="percen">50%</span>
      </p>

      <span className="bar">
        <span className="javascript" />
      </span>

      <p className="skill-name">
        {" "}
        <i className="fas fa-bold" /> bootstrap
        <span className="percen">68%</span>
      </p>

      <span className="bar">
        <span className="bootstrap" />
      </span>
      <p className="skill-name">
        {" "}
        <i className="fab fa-react" /> reactjs
        <span className="percen">68%</span>
      </p>

      <span className="bar">
        <span className="reactjs" />
      </span>
    </div>
  );
}
