import React from "react";
// import { hasHistory } from "react-router-dom";
import "./index.scss";
import Login from "../Login/login";
import Register from "../Login/regiester";

// import API from "../../utils/API";

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

 
  handleSuccessfulAuth(data) {
    //update parent compoent
    
    console.log('x', data);
    this.props.handleLogin(data);
    window.location.replace("/");
  }

  componentDidMount() {
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






  render() {


    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";


    return (

      <div className="App">
        <div className="login">
          
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
