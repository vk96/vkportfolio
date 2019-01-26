import React from "react";
import classnames from "classnames";

export default class CustCard extends React.Component {
  state = {
    showContent: false
  };
  toggleContent = e => {
    console.log("content-profile", e);

    e.preventDefault();
    this.setState({
      showContent: !this.state.showContent
    });
  };
  render() {
    const { showContent } = this.state,
      { mypic } = this.props;
    return (
      <div className="card-cust">
        <img src={mypic} alt="vikilprofile" />
        <a href="/" className="btn btn-view" onClick={this.toggleContent}>
          view profile
        </a>
        <div className={classnames("content-profile", { active: showContent })}>
          <br />
          <h2>vikil lakkavatri</h2>
          <p className="first mb-0">web developer</p>
          <p className="sec mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            ipsam, tempora veniam beatae earum eaque.
          </p>
          <a href="/" className="btn btn-skills">
            follow
          </a>
          <div className="close" onClick={this.toggleContent}>
            <i className="far fa-times-circle" />
          </div>
        </div>
      </div>
    );
  }
}
