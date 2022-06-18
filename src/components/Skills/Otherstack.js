import React from "react";
import { Col, Row } from "react-bootstrap";
import ThinkerCard from "../../Assets/OtherAbout/tinkercad.png";
import GameMaker from "../../Assets/OtherAbout/gamemaker.png";
import PremierePro from "../../Assets/OtherAbout/premiere-pro.png";
import CodeBlocks from "../../Assets/OtherAbout/codeblocks.png";
import Designspark from "../../Assets/OtherAbout/designspark.png";
import AndroidStudio from "../../Assets/OtherAbout/androidstudio.png";

function Otherstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Tinkercad</div>
        <img src={ThinkerCard} alt="ThinkerCard" width="72px" height="72px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Game Maker</div>
        <img src={GameMaker} alt="GameMaker" width="72px" height="50px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Premiere Pro</div>
        <img src={PremierePro} alt="PremierePro" width="72px" height="72px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Code Blocks</div>
        <img src={CodeBlocks} alt="CodeBlocks" width="72px" height="50px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Design Spark</div>
        <img src={Designspark} alt="CodeBlocks" width="72px" height="50px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Android Studio</div>
        <img
          src={AndroidStudio}
          alt="AndroidStudio"
          width="72px"
          height="50px"
        />
      </Col>
    </Row>
  );
}

export default Otherstack;
