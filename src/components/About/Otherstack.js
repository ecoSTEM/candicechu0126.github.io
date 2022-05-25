import React from "react";
import { Col, Row } from "react-bootstrap";

function Otherstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={2} className="tech-icons">
        <div className="text">Tinkercad</div>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <div className="text">Arduino</div>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <div className="text">Raspberry Pi</div>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <div className="text">ESP8266</div>
      </Col>
    </Row>
  );
}

export default Otherstack;
