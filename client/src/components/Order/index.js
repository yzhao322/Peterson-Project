import React, { useState } from "react";
import API from "../../utils/API";
import {
  FormControl,
  FormCheck,
  Form,
  Container,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";

const Order = (props) => {
  const [state, setState] = useState({
    produce: [{ name: "", inventory: 0, price: 0, description: "" }],
  });

  const orderForm = (e) => {
    e.preventDefault();
    console.log("Order", state.produce);
  };

  const getProduces = (e) => {
    e.preventDefault();
    API.getProduce().then((response) => {
      console.log(response);
      setState({
        ...state,
        produce: {
          ...state.produce,
          response,
        },
      });
    });
  };

  const handleOrder = (e) => {
    setState({
      ...state,
      order: {
        ...state.order,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <Container>
      <ListGroup>
        <Form onSubmit={getProduces}>
          {state.produce.map(({ id, name }) => (
            <ListGroupItem style={{ border: "black" }}>
              <Form.Check
                type="checkbox"
                label="add"
                style={{ border: "black" }}
              >
                {name}
                <Form.Control
                  type="number"
                  name={name}
                  onChange={handleOrder}
                />
              </Form.Check>
            </ListGroupItem>
          ))}
          <Button type="submit" color="light" style={{ marginBottom: "2rem" }}>
            Add to Cart
          </Button>
          <Button type="submit" color="light" style={{ marginBottom: "2rem" }}>
            Get
          </Button>
        </Form>
      </ListGroup>

      {/* <Form.Group controlId="formBasicCheckbox"> */}
      <Form.Check
        type="checkbox"
        label="Check me out"
        style={{ border: "red" }}
      />
      {/* </Form.Group> */}
    </Container>
  );
};

export default Order;
