import React from 'react';
import styled from 'styled-components';


const Header = () => {
    return (
        <>
            <Headers>
                <div className="header__content">
                    <h2>Daniel & Winnie</h2>
                </div>
            </Headers>   
        </>
    )
}

export default Header;


const Headers = styled.div `

    width: 100%;
    height: 100vh;
    background: url('image/R5PX7377.jpg') no-repeat center 35%/cover;
    position: relative;
    z-index: 1;

    &::before{
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.3);
        z-index: -1;
    }


    .header__content{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        color: #fff;
        font-family: 'Alex Brush', cursive;
        font-size: 35px;
        font-weight: 500;

        @media(min-width:768px){
            font-size: 50px;
        } 
    }

`;