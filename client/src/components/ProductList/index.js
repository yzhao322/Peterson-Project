import React from "react";
import { CardDeck, Card } from "react-bootstrap";
import "./style.css";

function ProductList(props) {
  return (
    <div>
      <h4>Featured Products</h4>

      {props.produce.map((item) => {

        return (
          <CardDeck key = {item._id}>
            <Card>
              <Card.Img variant="top" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Inventory: {item.inventory}</small>
              </Card.Footer>
            </Card>
            </CardDeck>
        );
      })}
    </div>
  );
}

export default ProductList;
