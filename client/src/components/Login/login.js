import React from "react";
import "./style.scss";
import Modal from 'react-bootstrap/Modal';


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
      formErrors: {
        username: "",
        password: ""
      },
      setShow: false,
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Username: ${this.state.username}
        Password: ${this.state.password}
      `);

      API.postUser(this.state)
      .then((response) => console.log(response))
      .catch((err) => console.warn(err));



    } else {
      this.setState({setShow:true});
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

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

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    let setShowClose = () => this.setState({setShow:false});

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
                type="text"
                name="password"
                placeholder="password"
                onChange={this.handleChange} />
              {formErrors.username.length > 0 && (
                <span className="errorMessage"> {formErrors.password}</span>
              )}
            </div>
          </div>
        </div>
        <div className="footer">
          <button 
          type="button" 
          className="btn"
          onClick={this.handleSubmit}
          >
            Login
          </button>
          
        </div>

        <Modal
      show= {this.state.setShow}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Sorry...
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <span className="errorMessage"> FORM INVALID</span>
          </Modal.Body>
          <Modal.Footer>
        <button 
        onClick={()=> this.setState({setShow:false})}
        >Close</button>
      </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


export default Login;