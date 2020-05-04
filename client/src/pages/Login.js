import React from 'react'

import { Container, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap"




function Login() {
    return (
        <div>

            <Container>
                <Row>

                    <Col lg={12} className="contact">
                        <h1>Login</h1>
                    </Col>

                    <Col lg={12} className="contact">


                        <InputGroup size="lg">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-lg">Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />

                        </InputGroup>

                        <br />

                        <InputGroup size="lg">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-lg">Email</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                        <br />
                        <InputGroup size="lg">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-lg">Phone Number</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                        <br />
                        <InputGroup size="lg">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-lg">Your message</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                        </InputGroup>
                        <br />
                        <InputGroup size="lg">

                            <Button variant="secondary" size="lg" block>
                                Send Massage
                             </Button>
                        </InputGroup>

                    </Col>
                </Row>
            </Container>



        </div >
    );
}
export default Login;
