import React from "react";

export default function Skill({ name, percen, icon }) {
  return (
    <React.Fragment>
      <p className="skill-name">
        {" "}
        <i className={"fab fa-" + icon} /> {name}
        <span className="percen">{percen}</span>
      </p>

      <span className="bar">
        <span className={name} />
      </span>
    </React.Fragment>
  );
}
