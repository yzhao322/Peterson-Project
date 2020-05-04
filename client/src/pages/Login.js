import React from "react";

import { InputGroup, FormControl, Button } from "react-bootstrap";

function Login() {

    return (
        <>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg">Username</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />

            </InputGroup>

            <br />

            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-lg">Password</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <br />
            <InputGroup size="lg">

                <Button variant="secondary" size="lg" block>
                    Log in
                </Button>
                </InputGroup>
        </>

    );
}
export default Login;
