import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProduct.products);

  const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);  
`
  const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 70%;
    height: 70%;
    padding: 10px;
    margin : 0 auto;
    margin-top : 10%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color : black;
  `;

  const Img = styled.img`
    width: 70%;
    height: 50%;
    object-fit: contain;
  `;

  return (
    <>
      <CardContainer>
        {products.map((product, i) => (
            <Link style={{textDecoration:'none'}} to={`/product/${product.id}`}>
                <Card key={i}>
                    <Img
                        className="card-img-top"
                        height="100%"
                        width="100%"
                        src={product.image}
                        alt="img"
                    />
                    <h5 className="card-title">Title: {product.title}</h5>
                    <p className="card-text">Price: $ {product.price}</p>
                    <p className="card-text">Category: {product.category}</p>
                </Card>
            </Link>
          
        ))}
      </CardContainer>
    </>
  );
};

export default ProductComponent;
