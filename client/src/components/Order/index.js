import React, { useState, useEffect } from "react";
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
    // const [state, setState] = useState({
    //   produce: [{ name: "", inventory: 0, price: 0, description: "" }],
    // });
    const [state, produceState] = useState([]);

    const [order, orderState] = useState({ order: {} });

    const orderForm = (e) => {
        e.preventDefault();
        console.log("Order", order);
    };

    useEffect(() => {
        API.getProduce()
            .then((response) => {
                console.log(response);
                produceState(response.data);
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
        orderState({
            ...order,
            order: {
                ...order.order,
                [e.target.name]: e.target.value,
            },
        });
        console.log("handled");
    };

    return (
        <Container>
            <ListGroup>
                <Form onSubmit={orderForm}>
                    {state.map(({ id, name }) => (
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
        </Container>
    );
};

export default Order;
