import React from "react";

export default function CustCard({ mypic }) {
  return (
    <div className="card-cust">
      <img src={mypic} alt="vikilprofile" />
      <a href="#" className="btn btn-view">
        view profile
      </a>
      <div className="content-profile">
        <br />
        <h2>vikil lakkavatri</h2>
        <p className="first">web developer</p>
        <br />
        <p className="sec">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          ipsam, tempora veniam beatae earum eaque.
        </p>
        <a href="#" className="btn btn-skills">
          follow
        </a>
        <div className="close">
          <i className="far fa-times-circle" />
        </div>
      </div>
    </div>
  );
}
