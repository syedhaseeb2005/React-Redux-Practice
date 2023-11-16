import { ActionTypes } from "../constant/actionType.js"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (products) =>{
    return {
        type : ActionTypes.SELECTED_PRODUCT,
        payload : products
    }   
} 

export const removeselectedProduct = () =>{
    return {
        type : ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}