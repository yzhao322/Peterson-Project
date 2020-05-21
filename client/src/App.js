import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Navbars from "./components/Nav";
import Footer from "./components/Footer";

// import UserMenu from "./components/userMenu";
import FavoritesList from "./pages/FavoritesList";

import LoginIndex from "./components/Login";

import Product from "./pages/ProductList";
import Member from "./pages/member";
import SignUpsuccess from "./pages/signUpsuccess";
import ShopingCart from "./pages/shopping-cart";
import ManagerTest from "./pages/ManagerTest";
import TransactionHistory from "./components/TransactionHistory";
import Contacts from "./components/Contacts";




class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "Not_Logged_In",
      user: {}
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "Logged_In",
      user: data
    });
  }

  render() {
    return (
      <Router>
        <>

          <Route render={props => (
              <Navbars {...props} 
              handleLogin={this.handleLogin} 
              loggedInStatus={this.state.loggedInStatus} />
            )} />
          <Switch>
          <Route exact path="/" component={Home} />
            
            {/* //Login Home page */}
            {/* <Route exact path="/login" render={props => (
              <LoginIndex 
              loggedInStatus={this.state.loggedInStatus} />
            )} /> */}

            <Route exact path={"/member"} render={props => (
              <Member
                {...props}

                loggedInStatus={this.state.loggedInStatus}
              />
            )}
            />



            <Route exact path="/product" component={Product} />
            <Route exact path="/category" component={ManagerTest} />
            <Route exact path="/shopping-cart" component={ShopingCart} />
            <Route exact path="/favorites" component={FavoritesList} />
            <Route exact path="/posts/:id" component={Detail} />
            <Route
              exact
              path="/transactionHistory"
              component={TransactionHistory}
            />

            <Route exact path="/signUpsuccess" component={SignUpsuccess} />
            <Route exact path="/contacts" component={Contacts} />
            <Route component={NoMatch} />

          </Switch>
          <Footer />
        </>
      </Router>
    )
  }
}

export default App;









// function App() {
//   return (
//     <Router>
//       <>
//         <Navbars />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/home" component={Home} />
//           <Route exact path="/Login" component={LoginIndex} />
//           <Route exact path="/member" component={member} />
//           <Route exact path="/userMenu" component={UserMenu} />
//           <Route exact path="/product" component={Product} />
//           <Route exact path="/category" component={ManagerTest} />
//           <Route exact path="/shopping-cart" component={ShopingCart} />
//           <Route exact path="/favorites" component={FavoritesList} />
//           <Route exact path="/posts/:id" component={Detail} />
//           <Route
//             exact
//             path="/transactionHistory"
//             component={TransactionHistory}
//           />
//           <Route exact path="/contacts" component={Contacts} />
//           <Route component={NoMatch} />
//         </Switch>
//         <Footer />
//       </>
//     </Router>
//   );
// }

// export default App;