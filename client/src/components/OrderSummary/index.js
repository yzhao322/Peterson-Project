import React, { useContext } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { useProduceContext } from '../../context/ProduceContext'
import API from "../../utils/API";

function OrderSummary() {
  const { state, dispatch } = useProduceContext();

  console.log('Context orders: ', state)

  const submitOrder = (e) => {
    e.preventDefault();
    API.saveOrder(state)
      .then((response) =>
        console.log(response)
      )

  }
  return (
    <div style={{ border: "3px solid grey", borderRadius: "5px", backgroundColor: '#f2eea7' }}>
      <h3 style={{ padding: '10px' }}>Order Summary</h3>
      {/* <Card style={{ width: '100%' }}> */}


      {state.order.map(({ name, price, quantity }) => (

        <Card style={{ width: '100%' }}>
          <br></br>
          <Card.Title>Product:{name}   </Card.Title>
          <Card.Title>Price: ${price * quantity}</Card.Title>
          <Card.Title>Quantity: {quantity}</Card.Title>
          <br></br>
        </Card>
      ))}
      {/* <Card.Title></Card.Title>
        <Card.Text>
          Details about product! Price, Quentity...
      </Card.Text>
        <Card.Link href="#">Delete From Cart</Card.Link>

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
      </Card> */}
      <br></br>
      <ListGroup>
        <ListGroup.Item>Subtotal:</ListGroup.Item>
        <ListGroup.Item>Shipping:</ListGroup.Item>
        <ListGroup.Item>Tax:</ListGroup.Item>
        <br></br>
        <ListGroup.Item>Order Total: </ListGroup.Item>
      </ListGroup>
      <Button onClick={submitOrder}>Final Submit</Button>
    </div>
  )
}
export default OrderSummary;
