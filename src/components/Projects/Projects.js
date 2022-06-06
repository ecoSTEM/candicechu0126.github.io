import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import editor from "../../Assets/Projects/fyp.png";
import powerFitness from "../../Assets/Projects/fyp.png";
import studentkit from "../../Assets/Projects/studentkit.png";
import bin from "../../Assets/Projects/bin.png";
import petcarrier from "../../Assets/Projects/petcarrier.png";
import styled from "styled-components";

export const Description = styled.div`
  justify-content: center;
  align-content: center;
  padding: 5px;
`;

export const Feature = styled.text``;

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
              description={
                <Description>
                  With our website that solves health problems during the period
                  of COVID-19, people could keep their states of both mental and
                  physical health by conducting equipment-free exercises at home
                  and avoiding injuries caused by a lack of fitness expertise.
                </Description>
              }
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bin}
              isBlog={false}
              title="Smart Garbage Bin"
              description={<Description>Make Smart Life</Description>}
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Auto Driving Shuttle Bus"
              description={
                <Description>Say goodbye for drive after drink</Description>
              }
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studentkit}
              isBlog={false}
              title="Student Kit"
              description={
                <Description>Say goodbye for drive after drink</Description>
              }
              link=""
            ></ProjectCard>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petcarrier}
              isBlog={false}
              title="Smart Pet Carrier"
              description={<Description>Go out with your pet</Description>}
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
