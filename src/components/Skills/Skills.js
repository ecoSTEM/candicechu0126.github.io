import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Otherstack from "./Otherstack";
import Toolstack from "./Toolstack";
import Hardwarestack from "./Hardwarestack";

function Skills() {
  return (
    <div className="circles">
      <Container fluid className="about-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Techstack />
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
          <h1 className="project-heading">
            <strong className="purple">Hardware</strong> I use
          </h1>
          <Hardwarestack />
          <h1 className="project-heading">
            <strong className="purple">Other</strong> I use
          </h1>
          <Otherstack />
        </Container>
      </Container>
    </div>
  );
}

export default Skills;
