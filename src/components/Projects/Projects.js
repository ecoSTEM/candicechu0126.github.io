import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import editor from "../../Assets/Projects/fyp.png";
import powerFitness from "../../Assets/Projects/fyp.png";
import studentkit from "../../Assets/Projects/studentkit.png";
import bitsOfCode from "../../Assets/Projects/fyp.png";
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
                  <Feature>App</Feature>
                  <Feature>App</Feature>
                  <Feature>App</Feature>
                </Description>
              }
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Smart Garbage Bin"
              description={
                <Description>
                  <Feature>App</Feature>
                  <Feature>App</Feature>
                  <Feature>App</Feature>
                </Description>
              }
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Auto Driving Shuttle Bus"
              description={
                <Description>
                  <Feature>App</Feature>
                  <Feature>App</Feature>
                  <Feature>App</Feature>
                </Description>
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
                <Row>
                  <Col>App</Col>
                  <Col>App</Col>
                  <Col>App</Col>
                </Row>
              }
              link=""
            ></ProjectCard>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petcarrier}
              isBlog={false}
              title="Smart Pet Carrier"
              description={
                <Container>
                  <Feature> Mobile App</Feature>{" "}
                  <Feature>Food Capacity Monitoring</Feature>{" "}
                  <Feature>Air Quality Monitoring</Feature>
                </Container>
              }
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
