import React from "react";
import mypic from "../assests/img/vikilprofile.jpg";
// bootstrap
import { Container } from "reactstrap";
import Skills from "../utility/Skills";
import CustCard from "../utility/CustCard";

export default function About() {
  return (
    <div id="profile">
      <h1>Profile</h1>

      <Container>
        <Skills />
        <CustCard mypic={mypic} />
      </Container>
    </div>
  );
}
