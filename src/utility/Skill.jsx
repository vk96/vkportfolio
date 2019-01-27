import React from "react";
import classnames from "classnames";
// context api
import { Consumer } from "../context";

export default function Skill({ name, percen, icon }) {
  return (
    <React.Fragment>
      <p className="skill-name">
        {" "}
        <i className={"fab fa-" + icon} /> {name}
        <span className="percen">{percen}</span>
      </p>

      <Consumer>
        {val => {
          return (
            <span className="bar">
              <span className={classnames(name, { active: val.skillsAni })} />
            </span>
          );
        }}
      </Consumer>
    </React.Fragment>
  );
}
