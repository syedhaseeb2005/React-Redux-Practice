import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    font-size: 20px;
    position: sticky;
    top: 0;
    background-color: #fff; 
    width: 100%; 
    z-index: 1000;
    padding : 7px;
`;

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <h1>Fake Shop</h1>
            </HeaderContainer>
        </>
    );
};

export default Header;
