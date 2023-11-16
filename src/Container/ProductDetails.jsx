import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct ,removeselectedProduct} from "../Redux/action/productAction.js";
import styled from "styled-components";

const Card = styled.div`
    display: flex;
    gap : 20px;
    margin-top : 40px;
    width : 100%;
    max-width : 1400px;
`

const CardImage = styled.div`
    display : flex;
    align-items : center;
    width : 80%;
    height : 50%;
    border-radius : 10px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-left : 20px;
    max-width : 100%;
    padding : 10px;
    `

const Img = styled.img`
    width : 100%;
    height : 400px;
    object-fit : contain;
    max-width : 100%;
`
const CardContent = styled.div`
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius : 10px;
    padding : 10px;
    display : flex;
    flex-direction : column;
    gap : 30px;
    width : 100%;
    margin-right : 20px;
`
const CardTitle = styled.h1`
    font-size : 20px;
`
const CardCategory = styled.h3`
    background-color : #eff1f3;
    color : #ceb8ac;
    text-transform: capitalize;
`
const CartBtn = styled.button`
    width : 20%;
    background-color : #e84c60;
    border : none;
    padding : 10px 10px;
    border-radius : 10px;
    color : #fff;
    font-weight : bold;
    `


const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const { productId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
                dispatch(selectedProduct(response.data));
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        if (productId && productId !== "") {
            fetchProduct();
        }
        return () => {
            dispatch(removeselectedProduct());
        }
    }, [productId, dispatch]);

    return (
        <div className="container">
            <Card>
                {Object.keys(product).length === 0 ? <div style={{fontSize:'20px'}}>Loading...</div> :(
                    <>
                <CardImage>
                    <Img src={product.image} alt={product.title} />
                </CardImage>
                <CardContent>
                    <CardTitle>
                        {product.title}
                    </CardTitle>
                    <h2 style={{fontSize:"18px"}}>
                        <a style={{textDecoration:'none',color:'#111'}} href="#">${product.price}</a>
                    </h2>    
                    <CardCategory>
                        {product.category}    
                    </CardCategory>
                    <p>{product.description}</p>
                    <CartBtn>
                        Add to Cart
                    </CartBtn>
                </CardContent></>)}
            </Card>
        </div>
    );
};

export default ProductDetails;
