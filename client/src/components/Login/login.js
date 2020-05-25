import React from "react";
import "./style.scss";
import { Modal, Dropdown, Form, Button } from "react-bootstrap"; import "react-bootstrap";
import API from "../../utils/API";


const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
      title: "Member",
      isLoggedIn: true,
     
      formErrors: {
        username: "",
        password: "",
        title: ""
      },
      setShow: false,
      type: 'input',
      hidden: true,
      LogginError: ""
    };


    this.toggleShow = this.toggleShow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit = e => {
    e.preventDefault();


    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Username: ${this.state.username}
        Password: ${this.state.password}
        Title: ${this.state.title}
      `);

    } else {
      this.setState({ setShow: true });
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }


    API.postLogin(this.state)
      .then((response) => {
        
        this.setState({title:response.data.title});
        this.setState({password:response.data.password});
        console.log(response.data.title, "Logged in!!!", this.state);

        localStorage.setItem('userData',
          JSON.stringify(this.state));

        this.props.handleSuccessfulAuth(this.state);

      }).catch((err) => {

        this.setState({ setShow: true });
        this.setState({ LogginError: "username/password incorrect" })
        
      });

  }

  handleChange = e => {

    e.preventDefault();

    //the name here is indicating the name from the input
    // for example:
    // if a name in input is username, then the name here will be username
    // the value here is whatever the vaule of the user input.
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "username":
        formErrors.username =
          value.length < 4 ? "minimum 4 characaters required" : "";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });

  };


  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  };





  render() {
    const { formErrors } = this.state;


    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="username"
                onChange={this.handleChange}
              />
              {formErrors.username.length > 0 && (
                <span className="errorMessage"> {formErrors.username}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type={this.state.hidden ? "password" : "text"}
                name="password"
                placeholder="password"
                onChange={this.handleChange} />
              <Button onClick={this.toggleShow}
              >{this.state.type === 'input' ? 'Show' : 'Hide'}
              </Button>
            </div>

            <Form inline>


              {/* <Dropdown
                name="title"
                id="selector"
                onChange={this.handleChange} >
                <Dropdown.Item value="member" selected>Member</Dropdown.Item>
                <Dropdown.Item value="manager">Manager</Dropdown.Item>
              </Dropdown> */}

              {formErrors.password.length > 0 && (
                <span className="errorMessage"> {formErrors.password}</span>
              )}
            </Form>

          </div>
        </div>
        <div className="footer">
          <Button
            type="button"
            className="btn"
            onClick={this.handleSubmit}
          >
            Login
          </Button>

        </div>

        <Modal
          show={this.state.setShow}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              <span className="modalTitle"> OOOps!</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span className="errorMessage"> {this.state.LogginError}</span>
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={() => 
                {this.setState({ setShow: false });
                window.location.replace("/");
                localStorage.removeItem('userData');
                localStorage.removeItem('data');}}
            >Close</button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


export default Login;