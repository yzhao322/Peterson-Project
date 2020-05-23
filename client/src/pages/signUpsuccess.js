import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";


const signUpsuccess = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Thanks for signing up!</h1>
            
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default signUpsuccess;
