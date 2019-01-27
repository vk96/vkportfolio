import React from "react";
import Skill from "./Skill";
// my skills data
import { skills } from "../data/skills";
// context
import { Consumer } from "../context";

export default function Skills() {
  return (
    <div className="skills">
      {skills.map((skill, i) => {
        return (
          <Skill
            key={i}
            name={skill.name}
            icon={skill.icon}
            percen={skill.percen}
          />
        );
      })}
      <Consumer>{val => <p>{val.skillsAni}</p>}</Consumer>
    </div>
  );
}
