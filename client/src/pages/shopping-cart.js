import React from "react";
import Wrapper from "../components/Wrapper";
import PaymentDetails from "../components/PaymentDetails"
import OrderSummary from "../components/OrderSummary";


const ShopingCart = () => {
    return (
        <Wrapper><br></br>
            <h2 style={{ color: "lightgrey", fontSize: "15px", marginLeft: "15px" }}>Your Shopping Cart</h2><br></br>
            <div className="row">
                <div className="col-sm-5">
                    <PaymentDetails />
                </div>
                <div className="col-sm-7">
                    <OrderSummary />
                </div>
            </div>
        </Wrapper>
    );
};


export default ShopingCart;