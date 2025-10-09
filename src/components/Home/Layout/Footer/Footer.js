import React from 'react';
import styled from 'styled-components';


const Footer = () => {
    return (
        <>
            <FooterContainer>
                <Box>
                    <img src="image/footer.png" alt="footer" />
                    <h2>Daniel & Winnie</h2>
                </Box>
            </FooterContainer>
        </>
    )
}

export default Footer;

const FooterContainer = styled.div `

    max-width: 1140px;
    margin: 2rem auto;
    padding: 0 15px;

`;
const Box = styled.div `

    text-align: center;

    img{
        width: 100px;
    }

    h2{
        font-family: 'Alex Brush', cursive;
        color: #000;
        font-size: 2.5rem;
        margin: .5rem  0 1rem 0;
    }

`;