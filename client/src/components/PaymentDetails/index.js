import React from "react";
import { Card, Accordion, useAccordionToggle, ListGroup } from "react-bootstrap";
import Address from "../Address";
import Payments from "../Payments";

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            style={{ backgroundColor: 'grey', borderRadius: "10px", float: "right" }}
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

function PaymentDetails() {
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    <p style={{ display: "inline" }}>BILLING ADDRESS</p><CustomToggle eventKey="0">Edit</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body><Address></Address></Card.Body>
                </Accordion.Collapse>
            </Card>
            <br></br>
            <Card>
                <Card.Header>
                    <p style={{ display: "inline" }}>SHIPPING ADDRESS</p><CustomToggle eventKey="1">Edit</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body><Address></Address></Card.Body>
                </Accordion.Collapse>
            </Card>
            <br></br>
            <Card>
                <Card.Header>
                    <p style={{ display: "inline" }}>PAYMENT</p><CustomToggle eventKey="2">Edit</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body><Payments></Payments></Card.Body>
                </Accordion.Collapse>
            </Card>
            <br></br>
            <Card>
                <Card.Header>
                    <p style={{ display: "inline" }}>REVIEW & PLACE ORDER</p><CustomToggle eventKey="3">Edit</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>    <ListGroup>
                        <ListGroup.Item>Subtotal:</ListGroup.Item>
                        <ListGroup.Item>Shipping:</ListGroup.Item>
                        <ListGroup.Item>Tax:</ListGroup.Item>
                        <ListGroup.Item>Order Total:</ListGroup.Item>
                    </ListGroup></Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default PaymentDetails;
