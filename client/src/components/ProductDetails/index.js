import React from "react";
import { Card, ListGroupItem, ListGroup, Button, InputGroup, FormControl} from "react-bootstrap";

function ProductDetails(){
  return (
<Card style={{ width: '30rem' }}>
  <Card.Body>
    <Card.Title>Product Title</Card.Title>
    <Card.Text>
      Some descriptions about the clicked product.
      Some descriptions about the clicked product.
      Some descriptions about the clicked product.
      Some descriptions about the clicked product.
      Some descriptions about the clicked product.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Price :</ListGroupItem>
    <ListGroupItem>Category :</ListGroupItem>
    <ListGroupItem>Locality of Growth :</ListGroupItem>
    <ListGroupItem>Item Number :</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>$</InputGroup.Text>
      <InputGroup.Text>0.00</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      placeholder="Input your Quentites"
      aria-label="Amount (to the nearest dollar)"
    />
    </InputGroup>
    <Button>Add to the Cart</Button>
  </Card.Body>
</Card>
  );
}

export default ProductDetails;
