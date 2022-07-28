import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import powerFitness from "../../Assets/Projects/fyp.png";
import studentkit from "../../Assets/Projects/studentkit.png";
import bin from "../../Assets/Projects/bin.png";
import petcarrier from "../../Assets/Projects/petcarrier.png";
import ibsp from "../../Assets/Projects/IBSP.png";
import aiBus from "../../Assets/Projects/AIbus.png";
import styled from "styled-components";

export const Description = styled.div`
  justify-content: center;
  align-content: center;
  padding: 5px;
`;

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={powerFitness}
              isBlog={false}
              title="Power Fitness"
              // description={
              //   <div>
              //     <Description>AI</Description>
              //     <Description>Sport Detection</Description>
              //     <Description>AI</Description>
              //   </div>
              // }
              data="/powerfitness"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bin}
              isBlog={false}
              title="Smart Garbage Bin"
              // description={<Description>Make Smart Life</Description>}
              data="/smartbin"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aiBus}
              isBlog={false}
              title="Auto Driving Shuttle Bus"
              // description={
              //   <Description>Say goodbye for drive after drink</Description>
              // }
              data="/autobus"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studentkit}
              isBlog={false}
              title="Student Kit"
              // description={
              //   <Description>Say goodbye for drive after drink</Description>
              // }
              data="/studentkit"
            ></ProjectCard>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ibsp}
              isBlog={false}
              title="Develop Image Abnormal Detection for Surveillance System"
              // description={
              //   <Description>Say goodbye for drive after drink</Description>
              // }
              data="/ibsp"
            ></ProjectCard>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petcarrier}
              isBlog={false}
              title="Smart Pet Carrier"
              // description={<Description>Go out with your pet</Description>}
              data="/petcarrier"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
