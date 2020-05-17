import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Navbars from "./components/Nav";
import Footer from "./components/Footer";
import FavoritesList from "./pages/FavoritesList";
import ShoppingCart from "./pages/ShoppingCart";
import LoginIndex from "./components/Login/index";
import Product from "./pages/ProductList";
import ShopingCart from "./pages/shopping-cart";
import ManagerTest from "./pages/ManagerTest";

function App() {
  return (
    <Router>
      <>
        <Navbars />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/Login" component={LoginIndex} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/category" component={ManagerTest} />
          <Route exact path="/shopping-cart" component={ShopingCart} />
          <Route exact path="/favorites" component={FavoritesList} />
          <Route exact path="/posts/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
