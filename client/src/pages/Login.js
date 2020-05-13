import React, { useState } from "react";
import API from "../utils/API";

import { InputGroup, FormControl, Button } from "react-bootstrap";

function Login() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.postUser(state)
      .then((response) => console.log(response))
      .catch((err) => console.warn(err));
  };
  return (
    <>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg">Username</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          name="username"
          onChange={handleChange}
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>

      <br />

      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg">Password</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          name="password"
          onChange={handleChange}
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <br />
      <InputGroup size="lg">
        <Button onClick={handleSubmit} variant="secondary" size="lg" block>
          Log in
        </Button>
      </InputGroup>
    </>
  );
}
export default Login;
