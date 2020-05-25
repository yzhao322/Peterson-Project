import React from "react";
import API from "../../utils/API";
import "./style.scss";
import zxcvbn from 'zxcvbn';
import "react-bootstrap";
import { Modal, Button } from "react-bootstrap";




const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

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


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null,
      address: null,
      title: "Member",
      formErrors: {
        username: "",
        email: "",
        password: "",
        address: ""
      },
      setShow: false,
      type: 'input',
      score: 'null',
      hidden: true,
      RegisterError: ""
    };


    this.toggleShow = this.toggleShow.bind(this);
    this.passwordStrength = this.passwordStrength.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };



  passwordStrength(e) {

    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    if (e.target.value === '') {
      this.setState({
        score: 'null'
      })
    }
    else {
      var pw = zxcvbn(e.target.value);
      this.setState({
        score: pw.score
      });
    }
    this.setState({ formErrors, [name]: value });

  }


  handleSubmit = e => {

    
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Username: ${this.state.username}
        Email: ${this.state.email}
        Password: ${this.state.password}
        Address: ${this.state.address}
        Title: ${this.state.title}
      `);

    } else {
      this.setState({ setShow: true });
      this.setState({ RegisterError: "FORM INVALID - DISPLAY ERROR MESSAGE" });
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }

    API.postUser(this.state)
      .then((response) => {
        console.log("registered:", response);
        window.location.replace("/signUpsuccess");
      }
      )
      .catch(() => {
        this.setState({ setShow: true });
        this.setState({ RegisterError : "username has already been taken"})
        
      })


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
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
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
    // let setShowClose = () => this.setState({ setShow: false });


    return (
      <>
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Register</div>
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

                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage"> {formErrors.email}</span>
                )}
              </div>

              <div className="form-group">

                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="address"
                  onChange={this.handleChange}
                />
                {formErrors.address.length > 0 && (
                  <span className="errorMessage"> {formErrors.Address}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>

                <input
                  className="password__input"
                  type={this.state.hidden ? "password" : "text"}
                  name="password"
                  placeholder="password"
                  // onChange={this.handleChange}
                  onChange={this.passwordStrength}
                />
                <Button onClick={this.toggleShow}
                >{this.state.type === 'input' ? 'Show' : 'Hide'}</Button>

                <span className="password__strength" data-score={this.state.score} />

                {formErrors.password.length > 0 && (
                  <span className="errorMessage"> {formErrors.password}</span>
                )}

              </div>
              <Button
                type="button"
                className="btn"
                onClick={this.handleSubmit}
              >
                Register
          </Button>
            </div>
          </div>
          <div className="footer">

          </div>


          <Modal
            show={this.state.setShow}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
              OOOps...
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <span className="errorMessage"> {this.state.RegisterError}</span>
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
      </>
    );
  }
}
export default Register;