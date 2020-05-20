import React, { useState} from "react";

import LoginIndex from "../Login/index";


import { Modal, NavDropdown, Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import API from "../../utils/API";



function Navbars() {


  //hoping to check logged status then fill up with the user info.

 


  //modal - pop up window for log in 
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //modal end

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/home">Peterson</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/product">Product</Nav.Link>
          <Nav.Link href="/category">Category</Nav.Link>
            <img src="./assets/imgs/person.svg"></img>
          <NavDropdown title="User:xxx" id="basic-nav-dropdown">
          <NavDropdown.Item href="/shopping-cart">Shopping Cart</NavDropdown.Item>
            <NavDropdown.Item href="/transactionHistory">Transaction History</NavDropdown.Item>
            <NavDropdown.Item href="/contacts">Contact Us</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
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

          <LoginIndex />
      
      </Modal>
      {/* modal end */}

    </Navbar>
  );
}

export default Navbars;
