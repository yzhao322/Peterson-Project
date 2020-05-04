import React, { useState } from "react";

import Login from "../../pages/Login";
import { Modal, NavDropdown, Nav, Navbar, Form, FormControl, Button} from "react-bootstrap";

function Navbars() {

  //modal - pop up window for log in 
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //modal end

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Peterson</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/product">Product</Nav.Link>
          <Nav.Link href="/category">Category</Nav.Link>
          <Nav.Link href="/shopping-cart">Shopping Cart</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
          <hr />

          {/* modal open button */}
          <Button onClick={() => { setModalIsOpen(true); handleShow() }}>Login</Button>

        </Form>

      </Navbar.Collapse>

      {/* modal window front end set up - body */}
      <Modal isOpen={modalIsOpen} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>
      {/* modal end */}

    </Navbar>
  );
}

export default Navbars;
