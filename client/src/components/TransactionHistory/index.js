import React, { useState, useEffect } from "react";
import { ListGroup, Button } from "react-bootstrap";
import API from "../../utils/API";
const TransactionHistory = () => {
    const [state, setState] = useState({
        orders: [],
    });
    console.log("this is state: ", state);
    useEffect(() => {
        API.getOrder()
            .then((response) => {
                // setState((state) => ({ ...state, orders: response.data }))
                setState({ orders: response.data });
                // console.log(response.data)
                // console.log("inside: ", state)
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="App">
            <ListGroup className="my-2" horizontal>
                {state.orders.map(order => {
                    return (
                        <ul
                            key={order._id}
                            style={{
                                listStyle: "none",
                                //   border: "1px solid red",
                                padding: "1em",
                                margin: "1em",
                                color: 'white'
                            }}
                        >
                            <ListGroup.Item style={{ color: "black" }}>
                                {/* {order._id} -  */}
                                {order.date}
                            </ListGroup.Item>
                            {order.items.map(item => {
                                return (
                                    <ul
                                        key={order._id + item._id}
                                        style={{
                                            // marginTop: "1em",
                                            border: "1px solid white",
                                            listStyle: "none",
                                            color: 'black'
                                        }}
                                    >
                                        <ListGroup.Item>Name: {item.name}</ListGroup.Item>
                                        {/* <ListGroup.Item>Description: {item.description}</ListGroup.Item> */}
                                        {/* <ListGroup.Item>Price: ${item.price}</ListGroup.Item> */}
                                        <ListGroup.Item>Quantity: {item.quantity}</ListGroup.Item>
                                    </ul>
                                );
                            })}
                        </ul>
                    );
                })}
            </ListGroup>
        </div>
    );
};
export default TransactionHistory;





