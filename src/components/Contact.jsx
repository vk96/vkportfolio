import React from "react";
// bootstrap
import { Row, Col } from "reactstrap";
import PersonalDetails from "../utility/PersonalDetails";
// data
import { details } from "../data/personal-details";

export default function Contact() {
  return (
    <div id="contact">
      <div className="container">
        <h1 className="heading">Contact</h1>
        <Row style={{ marginBottom: 60 }}>
          {details.map((detail, i) => (
            <Col xs="12" md="6" key={"detail" + i}>
              <PersonalDetails
                name={detail.name}
                icon={detail.icon}
                value={detail.value}
                delay={detail.delay}
              />
            </Col>
          ))}
        </Row>

        <form id="form">
          <label htmlFor="name" className="labels">
            Name
          </label>
          <input type="text" name="name" id="name" className="inputs" />
          <label htmlFor="email" className="labels">
            Email
          </label>
          <input type="text" name="email" id="email" className="inputs" />
          <label htmlFor="msg" className="labels">
            Message
          </label>
          <textarea name="msg" id="msg" cols="50" rows="4" className="input" />
          <input type="submit" className="submit" />
        </form>
      </div>
    </div>
  );
}
