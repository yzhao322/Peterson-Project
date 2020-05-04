import React from "react";
import ProductList from "../components/ProductList";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";


const Home = () => {
  return (
    <Wrapper>
      <Header />
      <br></br>
     <ProductList />
    </Wrapper>
  );
};

export default Home;
