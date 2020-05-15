import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

function Payments() {
    return (
        <Form>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={3}>
      Credit Card
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="Credit-Card" placeholder="Credit Card Number" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={3}>
    Security Code
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="password" placeholder="xxx" />
    </Col>
  </Form.Group>
  <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={3}>
        Card Type
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Debit"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Credit"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
      </Col>
    </Form.Group>
  </fieldset>

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
    )
}

export default Payments;