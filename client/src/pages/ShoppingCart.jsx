import React, { useState } from "react";
import API from "../utils/API";

export default () => {
  const [state, setState] = useState({
    name: "",
    quantity: 0,
    description: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // const RemoveProduce = (id) => {
  //   API.removeproduce(id)
  //   .then(() => setState({
  //     ...state,
  //     produce: state.produce.filter((produce) =>{
  //       return produce._id !== produce._id
  //       _id : id
  //     })
  //     }))
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    API.postProduce(state)
      .then((response) => console.log(response))
      .catch((err) => console.warn(err));
    setState({
      ...state,
      name: "",
      quantity: 0,
      description: "",
    });
  };

  return (
    <>
      <h1>Add Produce</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} required />
        <input type="number" name="quantity" onChange={handleChange} required />
        <input
          type="textarea"
          name="description"
          onChange={handleChange}
          required
        />
        <button>Submit</button>
      </form>
    </>
  );
};
