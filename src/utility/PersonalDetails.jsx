import React from "react";
// bootstrap
import { Card, CardBody } from "reactstrap";
import { Fade } from "react-reveal";

export default function PersonalDetails({ icon, name, value, delay }) {
  return (
    <Fade delay={delay} bottom onReveal={() => console.log("fade reveal")}>
      <Card style={{ textAlign: "center" }} className="my-card">
        <CardBody>
          <p className="details-icons">
            <i className={"fas fa-" + icon} />
          </p>
          <p className="details-name mb-0">{name}</p>
          <p className="details-value mb-0">{value}</p>
        </CardBody>
      </Card>
    </Fade>
  );
}
