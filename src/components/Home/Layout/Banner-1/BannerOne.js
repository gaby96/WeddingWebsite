import React from 'react';
import styled from 'styled-components';

const BannerOne = () => {
    return (
        <>
            <Container>
                <div className="header__content">
                    <img src="image/wedding.png" alt="wedding" />
                    <h2>Nii & Nuerki</h2>
                </div>
            </Container>
        </>
    )
}

export default BannerOne;


const Container = styled.div `

    width: 100%;
    height: 60vh;
    background: url('image/DannyWinnie.jpg') center 35%/cover;
    background-attachment: fixed;
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

`;