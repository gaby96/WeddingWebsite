import React from 'react';
import styled from 'styled-components';

const BannerOne = () => {
    return (
        <>
            <Container>
                <div className="header__content">
                </div>
            </Container>
        </>
    )
}

export default BannerOne;


const Container = styled.div `

    width: 100%;
    height: 100%;
    background: url('image/savethedate.png') no-repeat center 0% / cover;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 1;
    margin: 5em 0;

    &::before{
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.6);
        z-index: -1;
    }

    .header__content{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 60vh;
        color: #fff;
        font-family: 'Alex Brush', cursive;
        font-size: 35px;
        font-weight: 500;

        img {
            width: 70px;
            margin-bottom: 1rem;
        }

        @media(min-width:768px){
            font-size: 50px;
        }
    }

  @media (max-width: 768px) {
    background: url("image/savethedate.png") no-repeat center 40% / cover;
     height : 600px;
    }

    @media(max-width: 375px) {
    background: url("image/savethedate.png") no-repeat center 20%/ cover;
    height : 490px;
    }
`;

