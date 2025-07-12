import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import {Logo} from "./main-logo.png";

function Footer() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <img src="./main-logo.png" alt="" />
          </Col>
          <Col>1 of 1</Col>
          <Col>1 of 1</Col>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
