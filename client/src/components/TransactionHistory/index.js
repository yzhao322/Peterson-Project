import React from "react";
import { ListGroup,Button } from "react-bootstrap";

function TransactionHistory() {

    return (
        <div>
            <h5 style={{ color: "lightgrey", margin: "30px" }}>Transation History</h5>
            <div style={{marginLeft:"20px"}}>
                <ListGroup className="my-2" horizontal>
                    <ListGroup.Item>Date:xxxx-xx-xx</ListGroup.Item>
                    <ListGroup.Item>Item: apple</ListGroup.Item>
                    <ListGroup.Item>Quantity:100</ListGroup.Item>
                    <ListGroup.Item>Price: $100</ListGroup.Item>
                    <Button>Order Again!</Button>
                </ListGroup>

                <ListGroup className="my-2" horizontal>
                    <ListGroup.Item>Date:xxxx-xx-xx</ListGroup.Item>
                    <ListGroup.Item>Item: apple</ListGroup.Item>
                    <ListGroup.Item>Quantity:100</ListGroup.Item>
                    <ListGroup.Item>Price: $100</ListGroup.Item>
                    <Button>Order Again!</Button>
                </ListGroup>

                <ListGroup className="my-2" horizontal>
                    <ListGroup.Item>Date:xxxx-xx-xx</ListGroup.Item>
                    <ListGroup.Item>Item: apple</ListGroup.Item>
                    <ListGroup.Item>Quantity:100</ListGroup.Item>
                    <ListGroup.Item>Price: $100</ListGroup.Item>
                    <Button>Order Again!</Button>
                </ListGroup>

                <ListGroup className="my-2" horizontal>
                    <ListGroup.Item>Date:xxxx-xx-xx</ListGroup.Item>
                    <ListGroup.Item>Item: apple</ListGroup.Item>
                    <ListGroup.Item>Quantity:100</ListGroup.Item>
                    <ListGroup.Item>Price: $100</ListGroup.Item>
                    <Button>Order Again!</Button>
                </ListGroup>

                <ListGroup className="my-2" horizontal>
                    <ListGroup.Item>Date:xxxx-xx-xx</ListGroup.Item>
                    <ListGroup.Item>Item: apple</ListGroup.Item>
                    <ListGroup.Item>Quantity:100</ListGroup.Item>
                    <ListGroup.Item>Price: $100</ListGroup.Item>
                    <Button>Order Again!</Button>
                </ListGroup>

                <ListGroup className="my-2" horizontal>
                    <ListGroup.Item>Date:xxxx-xx-xx</ListGroup.Item>
                    <ListGroup.Item>Item: apple</ListGroup.Item>
                    <ListGroup.Item>Quantity:100</ListGroup.Item>
                    <ListGroup.Item>Price: $100</ListGroup.Item>
                    <Button>Order Again!</Button>
                </ListGroup>
            </div>
        </div>
    );
}

export default TransactionHistory;