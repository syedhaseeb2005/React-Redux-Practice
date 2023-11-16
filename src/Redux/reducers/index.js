import { combineReducers } from "@reduxjs/toolkit";
import { productReducer, selectedproductReducer } from "./productReducer";

const reducers = combineReducers({
    allProduct: productReducer,
    product : selectedproductReducer
});

export default reducers;
