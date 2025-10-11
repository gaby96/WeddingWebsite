import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Couple = () => {
    return (
        <div>
            <Flower>
                <img src="image/gif/flowers.gif" alt="Flowers" />
            </Flower>
            <CoupleContainer>
                <Box>
                    <Bride>
                        <div className="info">
                            <h2>Winnie Nuerki Apenahier</h2>
                            <h4>The Bride</h4>
                        </div>
                        <div className="image">
                            <img src="image/winnie.png" alt="The Bride" />
                        </div>
                    </Bride>
                    <Groom>
                        <div className="image">
                            <img src="image/Danny.jpg" alt="The Groom" />
                        </div>
                        <div className="info">
                            <h2>Daniel Nii Adjei Boye</h2>
                            <h4>The Groom</h4>
                        </div>
                    </Groom>
                </Box>
            </CoupleContainer>
        </div>
    )
}

export default Couple;



const Flower = styled.div `

   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 15px;
   margin: 2rem auto 5rem auto;

    img{
       width: 150px;

        /* @media(min-width:768px){
           width: 150px;
        } */
    }
`;


const CoupleContainer = styled.div `

    max-width: 1140px;
    margin: 2rem auto;
    padding: 0 15px;

`;
const Box = styled.div `

    display: grid;
    grid-gap: 2em;
    
    @media(min-width:1020px){
        display: grid;
        grid-gap: 2em;
        grid-template-columns: repeat(2, 1fr);
    }


    

    h4{
        font-family: 'Alex Brush', cursive;
        color: #C75B89;
        font-size: 1.5rem;
        margin: .5rem  0 1rem 0;
    }

    p{
        font-size: .9rem;
        font-weight: 500;
        line-height: 1.4rem;
        margin-bottom: 1rem;
    }


    .icon{
        width: 40px;
        height: 40px;
        background: #fff;
        padding: 12px;
        border-radius: 50%;
        color: #999;
        cursor: pointer;
        transition: all .6s ease;

        &:hover{
            background: #cb966a;
            color: #fff;
        }
    }

    .twitter{
        margin: 0 1rem;
    }

`;
const Bride = styled.div `
    display: flex;


    .image {
        margin-left: 20px;
        img{
            width: 150px;
            border-radius: 50%;
        }

        @media(max-width:1020px){
            margin: 0;
        } 
    }

    .info{
        text-align: right;

        @media(max-width:1020px){
            text-align: center;
        }
    }

   


    @media(max-width:1020px){
        flex-direction: column;
        text-align: center;
        .image{
            order: -1;
        }
    } 
    

`;
const Groom = styled.div `
    display: flex;


    .image {
        margin-right: 20px;
        img{
            width: 150px;
            border-radius: 50%;
        }

        @media(max-width:1020px){
            margin: 0;
        } 
    }

    @media(max-width:1020px){
        flex-direction: column;
        text-align: center;
    } 




`;

