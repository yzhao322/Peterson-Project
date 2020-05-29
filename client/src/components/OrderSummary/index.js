import React, { useContext } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { useProduceContext } from '../../context/ProduceContext'
import types from '../../context/types'
import API from "../../utils/API";

function OrderSummary() {
  const { state, dispatch } = useProduceContext();


  console.log('Context orders: ', state)
  const finalOrder = {
    items: state.order
  }
  const submitOrder = (e) => {
    e.preventDefault();
    API.saveOrder(finalOrder)
      .then((response) => {
        console.log(response)
        dispatch({ type: types.CLEAR_ORDERS, payload: [] })
      })

  }
  return (
    <div style={{ border: "3px solid grey", borderRadius: "5px", backgroundColor: '#f2eea7' }}>
      <h3 style={{ padding: '10px' }}>Order Summary</h3>
      {/* <Card style={{ width: '100%' }}> */}


      {state.order.map(({ name, price, quantity }) => (

        <Card style={{ width: '100%' }}>
          <br></br>
          <Card.Title
            value={state.order.name}
          >Product:{name}
          </Card.Title>
          <Card.Title
            value={state.order.price}
          >Price: ${price * quantity}
          </Card.Title>
          <Card.Title
            value={state.order.quantity}
          >Quantity: {quantity}
          </Card.Title>
          <br></br>
        </Card>
      ))}
      <br></br>
      {/* <ListGroup>
        <ListGroup.Item>Subtotal:</ListGroup.Item>
        <ListGroup.Item>Shipping:</ListGroup.Item>
        <ListGroup.Item>Tax:</ListGroup.Item>
        <br></br>
        <ListGroup.Item>Order Total: </ListGroup.Item>
      </ListGroup> */}
      <Button onClick={submitOrder} style={{ margin: 5, background: "green" }}>Final Submit</Button>
    </div>
  )
}
export default OrderSummary;
