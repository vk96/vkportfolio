import React from "react";
// bootstrap
import { Row, Col, Container } from "reactstrap";
import SingleService from "../utility/SingleService";
// data
import { services } from "../data/service";

export default function Service() {
  return (
    <div id="service">
      <Container>
        <p className="title">Service</p>
        <Row>
          {services.map((service, i) => (
            <Col md="4" key={"service" + i}>
              <SingleService
                value={service.value}
                icon={service.icon}
                name={service.name}
                delay={service.delay}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
