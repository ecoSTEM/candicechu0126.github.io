import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/fyp.png";
import emotion from "../../Assets/Projects/fyp.png";
import editor from "../../Assets/Projects/fyp.png";
import powerFitness from "../../Assets/Projects/fyp.png";
import suicide from "../../Assets/Projects/fyp.png";
import bitsOfCode from "../../Assets/Projects/fyp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={powerFitness}
              isBlog={false}
              title="Power Fitness"
              description="Indoor fitness monitoring and advisory website based on human pose estimation"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Smart Garbage Bin"
              description="My"
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="AI Auto Bus"
              description="AI Auto Bus"
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
