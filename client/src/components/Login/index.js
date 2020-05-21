import React from "react";
import { hasHistory } from "react-router-dom";
import "./index.scss";
import Login from "../Login/login";
import Register from "../Login/regiester";

import API from "../../utils/API";

//login home page

class LoginIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
      isAuthenicated: false
    };
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    console.log("-LoginIndex _ check status: ", this.props)
  }

 
  handleSuccessfulAuth(props,data) {
    //update parent compoent
    this.props.handleLogin(data);
    window.location.replace("/member");

  }

  componentDidMount() {
    this.checkLoginStatus();
    //Add .right by default
    this.rightSide.classList.add("right");
  }


  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  checkLoginStatus() {
    API.getUser()
      .then(res => {
        if (res.data.isloggedIn && this.state.loggedInStatus === "Not_Logged_In") {
          this.setState({
            loggedInStatus: "Logged_In",
            user: res.data.user
          })
        } else if (!res.data.isloggedIn & this.state.loggedInStatus === "Logged_In") {
          this.setState({
            loggedInStatus: "Not_Logged_In",
            user: {}
          })
        }

        console.log(" I am here!", res)
        // console.log(this.props)
      })
      .catch(err => console.log(err));
  }




  render() {


    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";


    return (

      <div className="App">
        <div className="login">
          <h4>Status: {this.props.loggedInStatus} </h4>
          <div className="container" ref={ref => (this.container = ref)}>
            
            {isLogginActive && (
              <Login 
              containerRef={ref => (this.current = ref)} 
              handleSuccessfulAuth={this.handleSuccessfulAuth} />
            )}

            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>


          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default LoginIndex;
