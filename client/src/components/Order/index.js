import React, { useState, useEffect, useContext } from "react";
import API from "../../utils/API";
import {
  Form,
  Container,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import ProduceContext from '../../context/Produce/produceContext';


const Order = (props) => {
  // const [state, setState] = useState({
  //   produce: [{ name: "", inventory: 0, price: 0, description: "" }],
  // });
  const [state, setState] = useState({
    produce: [],
    item: {},
    order: [],
    quantity: 0,
    item_id: null,
  });

  const OrderObject = useContext(ProduceContext)
  

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
    console.log('handleFinalOrder')
    OrderObject.setOrder(state.order)
    // API.saveOrder(state.order)
    // .then((response) =>
    // setState({
    //   name:""
    // }))
    }
  

  return (
    <Container>
      <ListGroup>
        <Form onSubmit={orderForm}>
          {state.produce.map(({ name }) => (
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
        </Form>
      </ListGroup>

      {/* <Form.Group controlId="formBasicCheckbox"> */}

      {/* </Form.Group> */}

      <form onSubmit={addOrder}>
        <select onChange={selectItem} value={state.item_id}>
          <option value={null}>Choose Item</option>
          {state.produce.map((p, i) => (
            <option key={i + "prodce"} value={p._id}>
              {p.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          min="0"
          max={state.item.inventory || 0}
          name="inventory"
          value={state.quantity}
          onChange={handleChange}
        />
        <button type="submit">Order</button>
      </form>
      <ul>
        {state.order.map((item, i) => (
          <li key={i + "-order"}>
            {item.name} {item.quantity} ${item.quantity * item.price}
          </li>
        ))}
      </ul>
      <button onClick={handleFinalOrder}>Save Order</button>
    </Container>
  );
};

export default Order;
