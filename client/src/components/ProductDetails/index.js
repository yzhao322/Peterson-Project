import React from "react";
import { Card, ListGroupItem, ListGroup, Button, InputGroup, FormControl } from "react-bootstrap";
import { useProduceContext } from '../../context/ProduceContext';

function ProductDetails(props) {
  const { state: { produce } } = useProduceContext();
  return (
    <>
      {produce.map(item => {
        return (
          <>
            <Card style={{ width: '30rem' }}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Price : {item.price}</ListGroupItem>
                {/* <ListGroupItem>Category :</ListGroupItem>
        <ListGroupItem>Locality of Growth :</ListGroupItem>
        <ListGroupItem>Item Number :</ListGroupItem> */}
              </ListGroup>
              <Card.Body>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                    <InputGroup.Text>0.00</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Input your Quantites"
                    aria-label="Amount (to the nearest dollar)"
                  />
                </InputGroup>
                <Button>Add to the Cart</Button>
              </Card.Body>
            </Card> <br></br>
          </>
        );
      })}
    </>
  );
}

export default ProductDetails;
