import React from "react";
import { Card,ListGroup} from "react-bootstrap";

function OrderSummary() {
    return (
        <div style={{ border: "3px solid grey", borderRadius: "5px", backgroundColor: '#f2eea7'}}>
            <h3 style={{ padding: '10px' }}>Order Summary</h3>
    <Card style={{ width: '100%' }}>
    <Card.Body>
      <Card.Title>Product 1</Card.Title>
      <Card.Text>
        Details about product! Price, Quentity...
      </Card.Text>
      <Card.Link href="#">Delete From Cart</Card.Link>
    </Card.Body>
            </Card>
            <Card style={{ width: '100%' }}>
    <Card.Body>
      <Card.Title>Product 2</Card.Title>
      <Card.Text>
        Details about product! Price, Quentity...
      </Card.Text>
      <Card.Link href="#">Delete From Cart</Card.Link>
    </Card.Body>
            </Card>
            <Card style={{ width: '100%' }}>
    <Card.Body>
      <Card.Title>Product 3</Card.Title>
      <Card.Text>
        Details about product! Price, Quentity...
      </Card.Text>
      <Card.Link href="#">Delete From Cart</Card.Link>
    </Card.Body>
            </Card>
            <br></br>
    <ListGroup>
  <ListGroup.Item>Subtotal:</ListGroup.Item>
  <ListGroup.Item>Shipping:</ListGroup.Item>
  <ListGroup.Item>Tax:</ListGroup.Item>
  <br></br>
  <ListGroup.Item>Order Total:</ListGroup.Item>
</ListGroup>
      </div>
  )
}
export default OrderSummary;
