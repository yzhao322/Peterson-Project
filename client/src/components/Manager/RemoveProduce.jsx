import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import {
  Form,
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  DeleteBtn,
} from "react-bootstrap";

const RemoveProduce = () => {
  const [state, setState] = useState({
    produce: [],
  });

  const [updatedProduce, setUpdatedProduce] = useState([]);

  useEffect(() => {
    API.getProduce()
      .then((response) => {
        // console.log(response);
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

  //   const Remove = (id) => {
  //     API.removeproduce(id).then(() =>
  //       setState({
  //         ...state,
  //         produce: state.produce.filter((produce) => {
  //           return produce._id !== produce._id;
  //           //   _id: id;
  //         }),
  //       })
  //     );
  //   };

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
    <ListGroup>
      <Form onSubmit={handleSubmit}>
        {state.produce.map(({ _id, name }) => (
          <ListGroupItem style={{ border: "black" }}>
            <Form.Check type="checkbox" label="add" style={{ border: "black" }}>
              {name}
              <Form.Control
                type="number"
                name={name}
                id={_id}
                onChange={updateProduceCount}
              />
            </Form.Check>
            {/* <div onClick={() => removePost(produce._id)} /> */}
          </ListGroupItem>
        ))}
        <Button type="submit" color="light" style={{ marginBottom: "2rem" }}>
          Remove from Inventory
        </Button>
      </Form>
    </ListGroup>
  );
};

export default RemoveProduce;
