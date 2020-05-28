import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import {
  Form,
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Card
} from "react-bootstrap";
import { useProduceContext } from '../../context/ProduceContext'


const Order = (props) => {
  const { state: produce, dispatch, types } = useProduceContext();
  console.log(produce)
  const [state, setState] = useState({
    produce: [],
    item: {},
    order: [],
    quantity: 0,
    item_id: null,
  });

  const orderForm = (e) => {
    e.preventDefault();
    
  };

  useEffect(() => {
    API.getProduce()
      .then((response) => {
        console.log(response);
        setState((state) => ({ ...state, produce: response.data }));
        // setState({
        //   ...state,
        //   produce: {
        //     ...state.produce,
        //     response,
        //   },
        // });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleOrder = (e) => {
    setState({
      ...state,
      order: {
        ...state.order,
        [e.target.name]: e.target.value,
      },
    });
    
  };

  const handleChange = (e) => {
    if (state.item._id) {
      let newOrder = true;
      let newCart = state.order.map((o) => {
        if (o._id === state.item._id) {
          o.quantity = parseInt(e.target.value);
          newOrder = false;
        }
        return o;
      });
      if (newOrder) {
        newCart = [
          ...newCart,
          {
            ...state.item,
            quantity: e.target.value,
          },
        ];
      }
      setState({
        ...state,
        quantity: e.target.value,
        order: newCart,
      });
    }
  };

  const selectItem = (e) => {
    const item = state.produce.find((p) => p._id === e.target.value) || {};
    setState({ ...state, item, item_id: e.target.value });
  };

  const addOrder = (e) => {
    e.preventDefault();
    setState({
      ...state,
      quantity: 0,
      item_id: null,
    });
   
  };

  const handleFinalOrder = () => {
    dispatch({
      type: types.SET_ORDERS,
      payload: state.order
    })

  }

  return (
    <Container>
      <h1 style={{ color: "salmon" }}>Order Produce</h1>
      <Form onSubmit={addOrder} style={{ margin: 5 }}>
        <select onChange={selectItem} value={state.item_id} style={{ margin: 5 }}>
          <option value={null}>Choose Item</option>
          {state.produce.map((p, i) => (
            <option key={i + "prodce"} value={p._id}>
              {p.name}
            </option>
          ))}
        </select>
        <Form.Control style={{ margin: 5 }}
          type="number"
          min="0"
          max={state.item.inventory || 0}
          name="inventory"
          value={state.quantity}
          onChange={handleChange}
        />
        {/* <Button type="submit" style={{ margin: 5 }}>Order</Button> */}
      </Form>
      <ListGroup as="ul">
        {/* <ul> */}
        {state.order.map((item, i) => (

          <ListGroup.Item as="li" key={i + "-order"}>
            <Card.Title>Product: {item.name}   </Card.Title>
            <Card.Title>Quantity: {item.quantity}</Card.Title>
            <Card.Title>Price: ${item.price * item.quantity}</Card.Title>

            {/* {item.name}      Quantity:{item.quantity}      Price: ${item.quantity * item.price} */}
          </ListGroup.Item>
        ))}
        {/* </ul> */}
      </ListGroup>
      <Button onClick={handleFinalOrder} style={{ margin: 5, background: "green" }}>Save to Cart</Button>
    </Container>
  );
};

export default Order;
