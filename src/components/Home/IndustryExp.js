import React from "react";
import styled from "styled-components";
import { Row, Container } from "react-bootstrap";
import JoyAether from "../../Assets/CompanyLogo/joyaether.png";
import Hkutdc from "../../Assets/CompanyLogo/hktdc.png";
import YGN from "../../Assets/CompanyLogo/ygn.png";
import msolution from "../../Assets/CompanyLogo/msolution.png";

export const Title = styled.text`
  color: #ffffff;
  font-size: 2.6em;
  font-family: sans-serif;
`;

export default function IndustryExp() {
  return (
    <Container fluid className="home-about-section">
      <Title>Industry Experience</Title>
      <Row
        style={{ justifyContent: "center", paddingTop: "80px", gap: "50px" }}
      >
        <img
          src={JoyAether}
          alt="company logo1"
          style={{
            width: "14rem",
            height: "6rem",
            alignSelf: "center",
          }}
        />
        <img
          src={Hkutdc}
          alt="company logo2"
          style={{
            width: "12rem",
            height: "9rem",
            alignSelf: "center",
          }}
        />
        <img
          src={YGN}
          alt="company logo3"
          style={{ width: "10rem", height: "8rem", alignSelf: "center" }}
        />
        <img
          src={msolution}
          alt="company logo4"
          style={{ width: "10rem", height: "8rem", alignSelf: "center" }}
        />
      </Row>
    </Container>
  );
}
