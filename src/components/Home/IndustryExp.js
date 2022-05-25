import React from "react";
import styled from "styled-components";

export const Title = styled.text`
  color: #7a87ff;
  font-size: 2.5em;
`;

export const Home3 = styled.div`
  position: relative;
  text-align: center;
`;

export default function IndustryExp() {
  return (
    <Home3 fluid className="home-about-section">
      <Title>Industry Experience</Title>
      <img src=" " alt="company logo" />
    </Home3>
  );
}
