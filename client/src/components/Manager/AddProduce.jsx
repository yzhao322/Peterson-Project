import React, { useState } from "react";
import API from "../../utils/API";
import {
  Form,
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  DeleteBtn,
  Label,
} from "react-bootstrap";

const AddProduce = () => {
  const [state, setState] = useState({
    name: "",
    inventory: 0,
    price: 0,
    description: "",
  });

  const handleChange = (e) => {
    console.log("inside handle change");
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log("inside handle");
    e.preventDefault();
    API.postProduce(state)
      .then((response) => {
        console.log("z: ", response);
        setState({
          name: "",
          inventory: 0,
          price: 0,
          description: "",
        });
      })
      .catch((err) => console.warn(err));
  };

  return (
    <>
      <div style={{ marginLeft: "20px" }}>
        <h1 style={{ color: "salmon" }}>Add Produce</h1>
        <Form onSubmit={handleSubmit} style={{ backgroundColor: "white" }}>
          <div style={{ marginLeft: 5, paddingRight: 5 }}>
            <label htmlFor="name">Name:</label>
            <br />
            <Form.Control
              type="text"
              value={state.name}
              name="name"
              onChange={handleChange}
              required
            />
            <br />
            <label htmlFor="name" style={{ marginTop: 5 }}>
              Price:
            </label>
            <br />
            <Form.Control
              value={state.price}
              type="number"
              name="price"
              min="0"
              onChange={handleChange}
              required
            />
            <br />
            <label htmlFor="name" style={{ margin: 5 }}>
              Inventory
            </label>
            <br />
            <Form.Control
              value={state.inventory}
              type="number"
              name="inventory"
              min="0"
              onChange={handleChange}
              required
            />
            <br />
            <label htmlFor="name">Description</label>
            <br />
            <Form.Control
              value={state.description}
              type="textarea"
              name="description"
              onChange={handleChange}
              required
            />{" "}
            <br />
            <Button type="submit" style={{ margin: 5, background: "green" }}>
              Add Produce
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddProduce;
