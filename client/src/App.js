import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Navbars from "./components/Nav";
import Footer from "./components/Footer";
import FavoritesList from "./pages/FavoritesList";
import ShoppingCart from "./pages/ShoppingCart";
import Login from "./pages/Login";
import Product from "./pages/ProductList";
import ShoppingCart from "./pages/shopping-cart";

function App() {
  return (
    <Router>
      <div>
          <Navbars />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/Login" component={Login} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/shopping-cart" component={ShoppingCart} />
            <Route exact path="/favorites" component={FavoritesList} />
            <Route exact path="/posts/:id" component={Detail} />
            <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
