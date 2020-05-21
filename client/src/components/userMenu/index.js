// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import API from "../../utils/API";

// import Register from "../Login/regiester";
// import { NavDropdown } from "react-bootstrap";


// class userMenu extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = {
//     //   loggedInStatus: "Not_Logged_In",
//     //   user: {}
//     // }
//     console.log(props)

    
//     this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
//   };

  

//   handleSuccessfulAuth(data){
//     this.props.handleLogin(data);
//     this.props.history.push("/member")
//   }

//   componentDidMount() {
//     this.checkLoginStatus();

//   }
  //  handleLogin(data) {
  //   this.setState({
  //     loggedInStatus: "Logged_In",
  //     user: data.user
  //   })
  // }

//   checkLoginStatus() {
//     API.getUser()
//       .then(res => {
//         if(res.data.isloggedIn && this.state.loggedInStatus === "Not_Logged_In"){
//           this.setState ({
//             loggedInStatus: "Logged_In",
//             user: res.data.user
//           })
//         } else if (!res.data.isloggedIn & this.state.loggedInStatus === "Logged_In") {
//           this.setState ({
//             loggedInStatus: "Not_Logged_In",
//             user: {}
//         })
//         }
        
//         console.log(" I am here!", res)
//         console.log(this.props.loggedInStatus)
//       })
//       .catch(err => console.log(err));
//   }

//   render(props) {

//     return (

//             <>
              
//             </>

//           );
//   }
// }
// export default userMenu;







// const userMenu = (props) => {


//   const [user, setUser] = useState([]);

//   // const {_id} = useParams()
//   // const {_id} = "";
//   useEffect(() => {
//     API.getUser()
//       .then(res => console.log(" I am here!", res.data))
//       .catch(err => console.log(err));
//   }, [])

//   checkLoginStatus() {
//     API.getUser()
//       .then(res => console.log(" I am here!", res.data))
//       .catch(err => console.log(err));
//   }

//   return (

//     <>
//       <img src="./assets/imgs/person.svg"></img>
//       <NavDropdown title="User:xxx" id="basic-nav-dropdown">

//         <NavDropdown.Item href="/shopping-cart">Shopping Cart</NavDropdown.Item>
//         <NavDropdown.Item href="/transactionHistory">Transaction History</NavDropdown.Item>
//         <NavDropdown.Item href="/contacts">Contact Us</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
//       </NavDropdown>
//     </>
//   );

// }
// export default userMenu;