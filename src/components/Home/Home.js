import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import candiceImg from "../../Assets/candiceImg.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import IndustryExp from "./IndustryExp";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Candice CHU</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <h1 className="animate-charcter">
                  Welcome to Candice's Website
                </h1>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={candiceImg}
                alt="personal pic"
                className="img-fluid"
                style={{
                  maxHeight: "500px",
                  borderStyle: "double",
                  borderRadius: "50px 0",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <IndustryExp />
      <Home2 />
    </section>
  );
}

export default Home;
