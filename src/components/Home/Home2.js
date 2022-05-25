import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I am a final year <strong>Electronic Engineering</strong> student
              at <strong>HKUST</strong>.
              <br />
              <br />
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />
              My experiences had given me
              <i>
                <b className="purple">
                  {" "}
                  strong organizational abilities, an analytical approach to
                  projects and the capacity to operate under pressure.
                </b>
              </i>
              <br />
              <br />I aim to learn something new from every experience &nbsp;
              <i>
                <b className="purple">
                  since I feel there is always space for personal and
                  professional growth.{" "}
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              <span className="purple">Connect </span>with me
            </h1>
            <ul className="home-contact">
              <li className="home-contact-info">
                <p>
                  <h10 style={{ color: "#6c757d" }}>Location</h10>
                  {"\t"}Hong Kong
                </p>
              </li>
              <li className="home-contact-info">
                <p>
                  <h10 style={{ color: "#6c757d" }}>Phone Number</h10>
                  {"\t"}(852) 549-77921
                </p>
              </li>
              <li className="home-contact-info">
                <p>
                  <h10 style={{ color: "#6c757d" }}>Email Address</h10>
                  {"\t"}candicechu126@gmail.com
                </p>
              </li>
            </ul>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/candicechu0126"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discord.com/channels/@ccannddiiccee#5880"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaDiscord />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/candice-chu-ab421023a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/candicechuuu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
