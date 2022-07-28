import React from "react";
import styled from "styled-components";
import { Col, Container } from "react-bootstrap";
import BGImg from "../../Assets/Projects/bgImg_ibsp.png";
import PorjectDesign from "../../Assets/Projects/projectDesign_ibsp.png";

const Title = styled.div`
  text-align: center;
  padding: 10px;
  color: #7a87ff;
  font-size: 24px;
`;

const SubTitle = styled.div`
  text-align: left;
  padding: 10px;
  font-size: 20px;
`;

const Abstract = styled.div`
  text-align: justify;
  padding: 10px;
  color: whitesmoke;
`;

export default function SurveillanceSystem() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="purple">
            Develop Image Abnormal Detection for Surveillance System
          </strong>
        </h1>
        <img
          src={BGImg}
          width="60%"
          style={{ paddingTop: "30px", paddingBottom: "30px" }}
        />
        <Col>
          <Title>Project Description</Title>
          <Abstract>
            The existence of surveillance system is not just about monitoring
            people's behavior. Some companies use surveillance system to
            understand the progress of work. Because the surveillance system is
            in a variety of different environments, it may be subject to human
            damage or physical damage. In order to be able to know these
            situations, the damaged surveillance system is deal with in a timely
            manner. In order to solve this problem, I develop the image abnormal
            detection for surveillance system. Analyze image which is newly from
            URL whether is different with standard reference pictures. Thus,
            knowing that the location of the surveillance system is being
            changed. It takes less the losses of the company. If the monitoring
            system sends an image every hour, the detector will be tested every
            half hour. The current latest image has been processed; it will not
            be processed. Until there are unprocessed image updates. If there is
            a problem with the detected image, this detector will send an email
            to remind you. The results of each test will be saved in the MySQL
            database and the email records will be saved.
          </Abstract>
        </Col>
        <Col>
          <Title>Objectives and Targets</Title>
          <Abstract>
            <SubTitle> Objectives </SubTitle>
            <li>Effectively understand whether moved of surveillance system</li>
            <li>
              Convenient for colleagues to deal with damaged surveillance
              systems in a timely manner
            </li>
            <SubTitle> Targets </SubTitle>
            <li>Ensure more than 90% accuracy of comparison images </li>
            <li>
              Provide email alerts and point out the corresponding surveillance
              system
            </li>
            <li>
              Able to handle occlusion situations, blurred situations and moving
              situations.
            </li>
          </Abstract>
        </Col>
        <Col>
          <Title> Background</Title>
          <Abstract>
            Since the company develops an engine project. There are more than
            280 equipment be installed at many construction sites to monitor the
            processing of work. These surveillance systems would send an image
            back each hour. The images’ content and quality will be affected by
            active behavior and passive behavior. The active behavior is
            man-made effects. Passive behavior includes weather, network, engine
            vibration or power impact. The influencing factors will cause
            difference situation such as the camera moved and monitoring other
            places, raining, fog, light degree influence, no picture reception,
            and excess object. The first task I need to do is browse these
            images record and get the characteristics of images and the
            situation. After that, the next step is to develop a detector that
            can analyze the images from different construction sites' camera
            make sure the place in the image is that we need to be monitoring
            the aim location. The surveillance system was installed on
            construction site. Maybe the image’s content and quality will be
            affected. For example, due to hit the foundation, the construction
            site makes the land vibration. Some parts of the cam will be
            obscured. There is a black edge on the image. Also, with reference
            to the illustration above Fig.1a, you can see that the cam be
            affected with the weather, electronic and human. That caused more
            different situation for the images. The most important thing is to
            identify whether the lens is moved. If the location in the image is
            not within the scope of our request. This detector can send email to
            alert.
          </Abstract>
        </Col>

        <Col>
          <Title>Design and Research Work</Title>

          <Abstract>
            <SubTitle>Research work</SubTitle>
            <li>
              Ask my colleagues about the background of the surveillance system,
              which is installed in construction site, the type of exception
              that the surveillance system sends back photos and the influence
              to hack the surveillance system maybe. For example, without
              knowing, the camera which installed in construction site was
              removed. In addition, due to weather problems, a large amount of
              dust blocks the lens for a long time. Also, the camera is moved by
              others to monitor other areas.
            </li>
            <li>
              After collecting the opinions, I started to choose the tools for
              designing the detector. Learn python and OpenCV. Find which
              package can process the images’ comparison and the feature about
              OpenCV deal with images. Based on my usual experience, I find it
              easy to use the Python language to write the program. That is
              useful to calculate image value or make the image be resized and
              so on.
            </li>
            <li>
              After knowing my targets, I designed a project flow. My project
              has three main parts. They are the Input Process, Analysis
              Process, and Alert Process. The Input process is getting the image
              from the path. The analysis process is to judge whether has
              abnormal about the surveillance system. The Alert process is to
              get the result from the analysis process then make the record and
              judge whether the need to send an email.
            </li>
          </Abstract>
          <img
            src={PorjectDesign}
            width="60%"
            style={{ paddingTop: "30px", paddingBottom: "30px" }}
          />
        </Col>
      </Container>
    </Container>
  );
}
