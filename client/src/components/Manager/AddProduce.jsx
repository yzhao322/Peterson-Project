import React, { useState } from "react";
import API from "../../utils/API";

const AddProduce = () => {
  const [state, setState] = useState({
    name: "",
    inventory: 0,
    price: 0,
    description: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.postProduce(state)
      .then((response) => {
        console.log("z: ", response);
        setState({
          name: "",
          inventory: 0,
          price: 0,
          description: "",
        });
      })
      .catch((err) => console.warn(err));
  };

  return (
    <>
      <h1 style={{ color: "salmon" }}>Add Produce</h1>
      <form onSubmit={handleSubmit} style={{ backgroundColor: "white" }}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          value={state.name}
          name="name"
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="name">Price</label>
        <br />
        <input
          value={state.price}
          type="number"
          name="price"
          min="0"
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="name">Inventory</label>
        <br />
        <input
          value={state.inventory}
          type="number"
          name="inventory"
          min="0"
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="name">Description</label>
        <br />
        <input
          value={state.description}
          type="textarea"
          name="description"
          onChange={handleChange}
          required
        />{" "}
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddProduce;
