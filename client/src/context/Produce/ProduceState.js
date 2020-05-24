import React, { useState, useReducer } from 'react';
import axios from 'axios';
import ProduceContext from './produceContext'
import ProduceReducer from './produceReducer'
import {
    ORDER
} from "../types";

const ProduceState = props => {
    // const initialState = {
    //     order: []
    // }

    // const [state, dispatch] = useReducer(ProduceReducer, initialState);
    const [order, setOrder] = useState([])
    console.log('ProduceState order: ', order)
    // {
    //     customerID: "Jason",
    //     orderID: 1,
    //     items: []
    // });
    //Order actions go here

    return <ProduceContext.Provider
        //What we want accessible in multiple components
        value={{
            order,
            setOrder
        }}
    >
        {props.children}
    </ProduceContext.Provider>

}

export default ProduceState;