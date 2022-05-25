import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMysql,
  SiVisualstudiocode,
  SiPostman,
  SiArduino,
  SiXcode,
} from "react-icons/si";
import { FaSourcetree, FaFigma } from "react-icons/fa";
import { BiCube } from "react-icons/bi";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={2} className="tech-icons">
        <SiArduino />
        <div className="text">Arduino</div>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiMysql />
        <div className="text">mySQL</div>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="text">Visual Studi Code</div>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiPostman />
        <div className="text">Postman</div>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiXcode />
        <div className="text">Xcode</div>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <FaSourcetree />
        <div className="text">Sourcetree</div>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <FaFigma />
        <div className="text">Figma</div>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <BiCube />
        <div className="text">STM32 CubeMX</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
