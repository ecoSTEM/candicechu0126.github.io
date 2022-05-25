import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillHeart } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Candice CHU </span>
            from <span className="purple"> Hong Kong.</span>
            <br />I am a final year bachelor’s degree student in Electronic
            Engineering at the Hong Kong University of Science and Technology
            and will grate in this summer. Through my professional training and
            studies, I have acquired knowledge and programming skills in
            application or website design. During my studies, I completed
            project and presentation on the smart shuttle bus and smart garbage,
            which provided me with hands-on experience designing IOT-related
            hardware and software combination technologies. This strengthened my
            high-level analytical thinking and organizational skills
            Additionally, my experience working as a web/mobile application
            quality analyst has taught me how to effectively communicate product
            concepts and techniques, and even how to test products and search
            the solutions for the problems.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <AiFillHeart /> Playing Games
            </li>
            <li className="about-activity">
              <AiFillHeart /> Search Cuisine
            </li>
            <li className="about-activity">
              <AiFillHeart /> Travelling
            </li>
            <li className="about-activity">
              <AiFillHeart /> Coffee Lover
            </li>
          </ul>

          <p style={{ color: "#a0afff" }}>"Try to believe in yourself!" </p>
          <footer className="blockquote-footer">Candice CHU</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
