import React from "react";
// reveal
import { Zoom } from "react-reveal";

export default function SingleService({ icon, name, value, delay }) {
  return (
    <Zoom delay={delay}>
      <div>
        <div className="icon">
          <i className={value ? "far fa-" + icon : "fa fa-" + icon} />{" "}
        </div>
        <div className="provide">{name}</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          animi et sed, aliquam, eveniet, nobis alias ut.
        </div>
      </div>
    </Zoom>
  );
}
