import React from "react";
import { Col, Row } from "react-bootstrap";
import stm32Board from "../../Assets/Hardware/stm32Board.png";
import arduinoBoard from "../../Assets/Hardware/arduino.png";
import axis3 from "../../Assets/Hardware/3-Axis.png";
import dht11 from "../../Assets/Hardware/DHT11.png";
import l298n from "../../Assets/Hardware/L298N.png";
import mq135 from "../../Assets/Hardware/mq135.png";
import hcsr04 from "../../Assets/Hardware/HC-SR04.png";
import rasperrypi from "../../Assets/Hardware/rasperrypi.png";
import lm35 from "../../Assets/Hardware/LM35.png";
import esp8266 from "../../Assets/Hardware/esp8266.png";
import tilt from "../../Assets/Hardware/tiltsensor.png";
import hc05 from "../../Assets/Hardware/hc05.png";
import dcmotor from "../../Assets/Hardware/dcmotor.png";
import ir from "../../Assets/Hardware/ir.png";
import pir from "../../Assets/Hardware/pir.png";
import sevensegment from "../../Assets/Hardware/sevensegment.png";
import servomotor from "../../Assets/Hardware/servomotor.png";

function Hardwarestack() {
  return (
    <Row className="scroller">
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">STM32 Board MINI-V3</div>
        <img src={stm32Board} alt="stm32 board" width="72px" height="72px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Arduino</div>
        <img
          src={arduinoBoard}
          alt="arduino board"
          width="72px"
          height="60px"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Raspberry Pi</div>
        <img src={rasperrypi} alt="rasperrypi" width="72px" height="60px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">ESP8266</div>
        <img src={esp8266} alt="esp8266" width="72px" height="72px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">MQ-135 Air Quality Sensor</div>
        <img src={mq135} alt="mq135" width="72px" height="72px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">L298N Motor Driver</div>
        <img src={l298n} alt="l298n" width="72px" height="72px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">HC-SR04 Ultrasonic Sensor</div>
        <img src={hcsr04} alt="hcsr04" width="72px" height="50px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">LM35 Temperature Sensor</div>
        <img src={lm35} alt="lm35" width="72px" height="72px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Digital Tilt Sensor</div>
        <img src={tilt} alt="tilt sensor" width="72px" height="50px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">DHT11 Sensor</div>
        <img src={dht11} alt="dht11" width="72px" height="72px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">HC-05 Bluetooth</div>
        <img src={hc05} alt="hc05" width="72px" height="72px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">3-Axis Digital Compass IC HMC5883L</div>
        <img src={axis3} alt="axis3" width="72px" height="72px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">DC Motor and Fan</div>
        <img src={dcmotor} alt="dcmotor" width="72px" height="72px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Infrared Sensors</div>
        <img src={ir} alt="ir" width="50px" height="72px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Pyro-electric Infrared Detector</div>
        <img src={pir} alt="pir" width="72px" height="72px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Seven Segment</div>
        <img src={sevensegment} alt="sevensegment" width="72px" height="72px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Servo Motor SG90</div>
        <img src={servomotor} alt="servomotor" width="72px" height="72px" />
      </Col>
    </Row>
  );
}

export default Hardwarestack;
