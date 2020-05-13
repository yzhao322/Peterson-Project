import React, { useState } from 'react';
import { FormControl, FormCheck, Form, Container, ListGroup, ListGroupItem, Button } from "react-bootstrap";

const Order = props => {
    const [state, setState] = useState({
        produce: [
            { name: "Kiwi", quantity: 50, desc: "100 Count box" },
            { name: "Lemon", quantity: 50, desc: "100 Count box" },
            { name: "Apple_Granny", quantity: 50, desc: "Granny Smith 50 Count box" },
            { name: "Apple_Gala", quantity: 50, desc: "Gala 50 Count box" }
        ],
        order: {}
    })

    const orderForm = e => {
        e.preventDefault()
        console.log("Order", state.order)
    }

    const handleOrder = e => {
        setState({
            ...state,
            order: {
                ...state.order,
                [e.target.name]: e.target.value
            }
        })
    }

    return <Container>
        <ListGroup>
            <Form onSubmit={orderForm}>
                {state.produce.map(({ name, quantity, desc }) => (
                    <ListGroupItem style={{ border: "black" }}>
                        <Form.Check type="checkbox" label='add' style={{ border: "black" }} >
                            {name}
                            {quantity}
                            {desc}
                            <Form.Control type="number" name={name} max={quantity} min={0} onChange={handleOrder} />
                        </Form.Check>
                    </ListGroupItem>
                )
                )}
                <Button type="submit" color="light"
                    style={{ marginBottom: "2rem" }}>
                    Add to Cart</Button>
            </Form>
        </ListGroup>


        {/* <Form.Group controlId="formBasicCheckbox"> */}
        <Form.Check type="checkbox" label="Check me out" style={{ border: "red" }} />
        {/* </Form.Group> */}
    </Container>

}

export default Order;