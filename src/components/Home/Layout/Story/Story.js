import React from 'react';
import styled from 'styled-components';


const Story = () => {
    return (
        <div>
            <Flower>
                <img src="image/gif/flowers2.gif" alt="Flowers" />
            </Flower>

            <StoryContainer>
                <Box>
                    <div className="image">
                        <img src="image/R5PX7232.jpg" alt="couple" />
                    </div>
                    <div className="info">
                        <h4>Wedding Invitation</h4>
                        <p>Together with their families, Daniel Nii Adjei Boye & Winnie
                            Nuerki Apenahier request the honor of your presence
                            at their marriage ceremony
                        </p>
                    </div>
                </Box>
            </StoryContainer>            
        </div>
    )
}

export default Story;


const Flower = styled.div `

   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 15px;
   margin: 5rem auto;


    img{
       width: 150px;

        /* @media(min-width:768px){
           width: 150px;
        } */
    }
`;



const StoryContainer = styled.div `

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


    .image{
        text-align:center;
        img{
            width: 100%;
            @media(min-width:600px){
                width: 300px;
                object-fit: cover;
                text-align: right;
            } 
        }

        @media(min-width:1020px){
            text-align: right;
        }
    }


    h4{
        font-family: 'Alex Brush', cursive;
        color: #CB966A;
        font-size: 3.7rem;
    }


    h2{
        margin: 0 0 1.3rem 0;
    }

    h3{
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom:.7rem;
    }

    p{
        font-size: 1.2rem;
        font-weight: 200;
        line-height: 1.4rem;
        margin-bottom: 1rem;
    }
`;