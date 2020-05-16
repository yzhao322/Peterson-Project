import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import API from "../utils/API";

const Home = () => {
  const [produce, produceState] = useState([]);

  useEffect(() => {
    API.getProduce()
      .then((res) => {
        console.log(res);
        produceState(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <Header />
      <br></br>
      <ProductList produce={produce} />
    </Wrapper>
  );
};

export default Home;
