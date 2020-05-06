import React from "react";
import { CardDeck, Card } from "react-bootstrap";
import "./style.css";

function ProductList(){
  return (
    <div>
    <h4>Featured Products</h4>
    <CardDeck>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Product title</Card.Title>
        <Card.Text>
          Product 1 - Some Detais about this product 
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Item 1</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Product title</Card.Title>
        <Card.Text>
        Product 2 - Some Detais about this product
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Item 2</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Product title</Card.Title>
        <Card.Text>
        Product 3 - Some Detais about this product 
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Item 3</small>
      </Card.Footer>
      </Card>
      </CardDeck>
      <br></br>
    <CardDeck>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Product title</Card.Title>
        <Card.Text>
        Product 4 - Some Detais about this product 
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Item 4</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Product title</Card.Title>
        <Card.Text>
        Product 5 - Some Detais about this product 
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Item 5</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Product title</Card.Title>
        <Card.Text>
        Product 6 - Some Detais about this product 
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Item 6</small>
      </Card.Footer>
    </Card>
      </CardDeck>
      </div>
  );
}

export default ProductList;
