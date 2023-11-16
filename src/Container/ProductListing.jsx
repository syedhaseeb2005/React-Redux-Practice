import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../Redux/action/productAction.js";

const ProductListing = () => {
    const products = useSelector((state) => state.allProduct.products);
    const dispatch = useDispatch(); 
    
    useEffect(() => {
      const fetchProducts = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        // console.log(res.data);
        dispatch(setProducts(res.data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [dispatch]);
  
  // console.log("Products", products);
  return (
    <>
      <ProductComponent />
    </>
  );
}

export default ProductListing;
