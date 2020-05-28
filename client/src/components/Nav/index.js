import React from "react";
import { Link } from 'react-router-dom';
import LoginIndex from "../Login/index";
// import UserMenu from "../userMenu/index";
import { Modal, NavDropdown, Nav, Navbar, Form, Button } from "react-bootstrap";

import "./style.css";

class Navbars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInStatus: "Logged_In",
      user: {},
      show: false,
      showUser: false,
      showLogin: true
    }
    console.log("y", props.loggedInStatus)
    console.log("x", props.data)
  }

  componentWillMount() {

    let data = [];
    if (localStorage && localStorage.getItem('userData')) {
      data = JSON.parse(localStorage.getItem('userData'));

    }

    this.setState({ user: data });
    console.log(data, this.state.user);
  }


  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {


    return (

      <div>

        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/home">Peterson</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/product">Product</Nav.Link>





              <NavDropdown
                title={"User: " + this.state.user.username}
                id="basic-nav-dropdown"
                className={!this.state.user.username ? 'hidden' : ''}
              >

                <img src="./assets/imgs/person.svg" alt="icon"></img>


                <NavDropdown.Item
                  href="/shopping-cart"
                  className={this.state.user.title === "Member" ? '' : 'hidden'}
                >Shopping Cart</NavDropdown.Item>



                <div className={this.state.user.title === "Member" ? '' : 'hidden'}>
                  <Link to="/shopping-cart">NEW SUMMARY</Link>
                </div>


                <NavDropdown.Item
                  href="/category"
                  className={this.state.user.title === "Manager" ? '' : 'hidden'}
                >Category</NavDropdown.Item>



                <NavDropdown.Item href="/transactionHistory">Transaction History</NavDropdown.Item>
                <NavDropdown.Item href="/contacts">Contact Us</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4"
                  onClick={this.props.handleLogout}
                >Sign Out</NavDropdown.Item>
              </NavDropdown>

            </Nav>

            <Form inline>
              {/* disable search function for now， Nothing is built here yet */}
              {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button> */}
              <hr />

              {/* modal open button */}

              <Button
                type="button"
                onClick={this.showModal}
                className={!this.state.user.username ? '' : 'hidden'}
              >Login</Button>


            </Form>

          </Navbar.Collapse>

          {/* modal window front end set up - body */}
          <Modal show={this.state.show}>

            <LoginIndex
              handleLogin={this.props.handleLogin}
              loggedInStatus={this.props.loggedInStatus}
            />


            <Modal.Footer>
              <Button type="button"
                onClick={() =>

                  window.location.replace("/")

                }>close</Button>
            </Modal.Footer>
          </Modal>
          {/* modal end */}

        </Navbar>
      </div>
    );
  }
}

export default Navbars;







// const Navbars = (props) => {

//   //modal - pop up window for log in 
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   //modal end

//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand href="/home">Peterson</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link href="/home">Home</Nav.Link>
//           <Nav.Link href="/product">Product</Nav.Link>
//           <Nav.Link href="/category">Category</Nav.Link>

//           <UserMenu />
//           <h4>Status: {props.loggedInStatus} </h4>
//         </Nav>

//         <Form inline>
//           <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//           <Button variant="outline-success">Search</Button>
//           <hr />

//           {/* modal open button */}
//           <Button onClick={() => { setModalIsOpen(true); handleShow() }}>Login</Button>

//         </Form>

//       </Navbar.Collapse>

//       {/* modal window front end set up - body */}
//       <Modal isOpen={modalIsOpen} show={show} onHide={handleClose}>

//         <LoginIndex />

//       </Modal>
//       {/* modal end */}

//     </Navbar>
//   );
// }

// export default Navbars;



// class Navbars extends React.Component {
//   constructor(props) {
//     super(props);
//   }


//   render() {
//   //modal - pop up window for log in 
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   //modal end

//   return (
//     <>
//     <h1>Status: {this.props.loggedInStatus} </h1>
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand href="/home">Peterson</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="mr-auto">
//           <Nav.Link href="/home">Home</Nav.Link>
//           <Nav.Link href="/product">Product</Nav.Link>
//           <Nav.Link href="/category">Category</Nav.Link>

//           <UserMenu />

//         </Nav>

//         <Form inline>
//           <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//           <Button variant="outline-success">Search</Button>
//           <hr />

//           {/* modal open button */}
//           <Button onClick={() => { setModalIsOpen(true); handleShow() }}>Login</Button>

//         </Form>

//       </Navbar.Collapse>

//       {/* modal window front end set up - body */}
//       <Modal isOpen={modalIsOpen} show={show} onHide={handleClose}>

//         <LoginIndex />

//       </Modal>
//       {/* modal end */}

//     </Navbar>
//     </>
//   );
// }
// }
// export default Navbars;