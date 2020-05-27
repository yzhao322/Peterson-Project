import React from "react";
// import ProductList from "../components/ProductList";
import Wrapper from "../components/Wrapper";
// import ProductDetails from "../components/ProductDetails";
import Order from "../components/Order";

const Product = () => {
  return (
    <Wrapper >
      <br></br>
      <div className="row">
        <div className="col-sm-5" style={{ backgroundColor: "white" }}>

          <Order />
        </div>
        {/* <div className="col-sm-7">
          <ProductList />
        </div> */}
      </div>
    </Wrapper >
  );
};

export default Product;
