import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Nav.Link as={Link} to={props.data}>
          <Button variant="primary">
            <BiLinkExternal /> &nbsp;
            {props.isBlog ? "View Blog" : "View Details"}
          </Button>
        </Nav.Link>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
