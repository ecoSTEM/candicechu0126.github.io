import React from "react";
import styled from "styled-components";

export const warpper = styled.div``;

const Text5 = styled.h5`
  color: #89898a;
`;

function About2() {
  return (
    <warpper>
      <h1 style={styles.title}>Education</h1>
      <ul style={{ textAlign: "justify", justifyContent: "space-around" }}>
        <h4>Bachelor in Electronic Engineering</h4>
        <Text5>
          Hong Kong University of Science and Technolog (2019 - 2022)
        </Text5>
        <li>Anticipated graduation year: 2022</li>
      </ul>
      <h1 style={styles.title}>Experience</h1>
      <div style={styles.rowWork}>
        <div style={{ flex: 1 }}>
          <ul style={{ textAlign: "justify", justifyContent: "space-around" }}>
            <h4>Computer Engineering Intern - Programmer</h4>
            <Text5>mSolution Consultants Limited (Dec 2018 – Apr 2019)</Text5>
            <li>Analysis the problem from the CCTV situation of the site</li>
            <li>
              Conducted research bases on python method tocompare two image
              similarity
            </li>
            <li>Design program and virtual database</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <ul style={{ textAlign: "justify", justifyContent: "space-around" }}>
            <h4>Quality Analyst- Web/Mobile Application Intern</h4>
            <Text5>JoyAether Limited (Dec 23, 2020 – Feby 3, 2021)</Text5>
            <li>Business Information Collection</li>
            <li>Web / Mobile Application Testing</li>
          </ul>
        </div>
      </div>
      <div style={styles.rowWork}>
        <div style={{ flex: 1 }}>
          <ul style={{ textAlign: "justify", justifyContent: "space-around" }}>
            <h4>STEM Assistant Coordinator Intern</h4>
            <Text5>Youth Global Network (Jun 1, 2021-Present)</Text5>
            <li>Support of software platform and design recommendation</li>
            <li>Test education platform</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <ul style={{ textAlign: "justify", justifyContent: "space-around" }}>
            <h4>Research and Techer Assistant</h4>
            <Text5>Youth Global Network (Sept 1, 2021-Present)</Text5>
            <li>Assist in software maintenance of youCodia products</li>
          </ul>
        </div>
      </div>
    </warpper>
  );
}

export default About2;

const styles = {
  title: {
    paddingBottom: "30px",
    paddingTop: "50px",
    color: "white",
    fontSize: "2.3em",
    fontWeight: 500,
    justifyContent: "center",
  },
  rowWork: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "30px",
  },
};
