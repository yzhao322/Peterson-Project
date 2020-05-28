import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import {
  Form,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";

const RemoveProduce = () => {
  const [state, setState] = useState({
    produce: [],
  });

  const [updatedProduce, setUpdatedProduce] = useState([]);

  useEffect(() => {
    API.getProduce()
      .then((response) => {
        setState((state) => ({ ...state, produce: response.data }));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = async (e) => {
    console.log("keep going", e);
    e.preventDefault();
    const r = updatedProduce.map(async (produce) => {
      return await API.removeproduce(produce);
    });
    console.log("r: ", r);
    const resolvedPromises = await Promise.all(r);
    console.log("resolvedPromises", resolvedPromises);
  };
  console.log(updatedProduce);
  //   return null;
  const updateProduceCount = (e) => {
    console.log(e.target);
    const temp = [...updatedProduce];
    // check if item exists
    let exists = false;
    let index;

    // loop
    temp.forEach((item, i) => {
      if (item._id === e.target.id) {
        exists = true;
        index = i;
      }
    });

    // if it exists, update it
    if (exists) {
      temp[index] = { ...temp[index], inventory: e.target.value };
    } else {
      temp.push({
        _id: e.target.id,
        name: e.target.name,
        inventory: e.target.value,
      });
    }

    setUpdatedProduce(temp);
  };

  return (
    <div>
      <h1 style={{ color: "salmon" }}>Update Produce</h1>
      {/* <ListGroup> */}
      <Form onSubmit={handleSubmit} style={{ background: "white" }}>
        {state.produce.map(({ _id, name }) => (
          <ListGroupItem style={{ border: "black" }}>
            {name}
            <Form.Control
              type="number"
              name={name}
              id={_id}
              onChange={updateProduceCount}
            />
          </ListGroupItem>
        ))}
        <Button type="submit" style={{ margin: 5, background: "green" }}>
          Update Inventory
        </Button>
      </Form>
      {/* </ListGroup> */}
    </div>
  );
};

export default RemoveProduce;
