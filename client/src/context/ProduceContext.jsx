import React, { createContext, useContext, useReducer } from "react";
import types from "./types";

const produceContext = createContext();
const initialState = {
  order: [],
  // produce: [],
};

const reducer = (state, action) => {
  console.log("action: ", action);
  switch (action.type) {
    case types.SET_PRODUCE:
      return {
        ...state,
        produce: action.payload,
      };
    case types.SET_ORDERS:
      console.log(action.payload);
      return {
        ...state,
        order: action.payload,
      };
    case types.CLEAR_ORDERS:
      console.log("CLEAR_ORDERS");
      return {
        order: action.payload,
      };
    default:
      return state;
  }
};

const { Provider } = produceContext;
export const ProduceProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch, types };
  return <Provider value={value}>{props.children}</Provider>;
};

export const useProduceContext = () => useContext(produceContext);
