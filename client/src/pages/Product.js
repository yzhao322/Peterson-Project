import React, { useEffect } from "react";
import ProductDetails from "../components/ProductDetails";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import API from "../utils/API";
import { useProduceContext } from '../context/ProduceContext'



const product = () => {
  const { state: { types }, dispatch } = useProduceContext();

  useEffect(() => {
    API.getProduce()
      .then(res => {
        dispatch({
          type: types.SET_PRODUCE,
          payload: res.data
        })
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <Wrapper>
      <br></br>
      <ProductDetails />
    </Wrapper>
  );
};

export default product;