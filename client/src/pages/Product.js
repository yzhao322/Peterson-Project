import React , { useState, useEffect } from "react";
import ProductDetails from "../components/ProductDetails";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import API from "../utils/API";



const product = () => {
  const [produce, produceState] = useState([]);
  
  useEffect(() => {
    API.getProduce()
      .then(res => {
        produceState(res.data)
      })
    .catch(err => console.log(err))
  }, []);

  return (
    <Wrapper>
      <br></br>
     <ProductDetails produce={produce} />
    </Wrapper>
  );
};

export default product;