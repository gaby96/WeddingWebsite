import React from 'react';
import styled from 'styled-components';


const Gallery = () => {
    return (
        <>
            <Flower>
                <img src="image/gif/flowers3.gif" alt="Flowers" />
            </Flower>
            <GalleryContainer>
                <Box>
                    <h2>Gallery</h2>
                    <h3>OUR MEMORIES</h3>
                    <ImagesContainer>
                        <div className="image">
                            <img src="image/R5PX7221.jpg" alt="photos-1" />
                        </div>
                        <div className="image">
                            <img src="image/R5PX7392.jpg" alt="photos-2" />
                        </div>
                        <div className="image">
                            <img src="image/R5PX7235.jpg" alt="photos-3" />
                        </div>
                        <div className="image">
                            <img src="image/R5PX7318.jpg" alt="photos-4" />
                        </div>
                        <div className="image">
                            <img src="image/dannywinniesit.jpg" alt="photos-5" />
                        </div>
                        <div className="image">
                            <img src="image/R5PX7376.jpg" alt="photos-6" />
                        </div>
                       
                    </ImagesContainer>
                </Box>
            </GalleryContainer>
        </>
    )
}

export default Gallery;


const Flower = styled.div `

   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 15px;
   margin: 5rem auto 2rem auto;

    img{
       width: 150px;

        /* @media(min-width:768px){
           width: 150px;
        } */
    }
`;



const GalleryContainer = styled.div `

    max-width: 1140px;
    margin: 2rem auto;
    padding: 0 15px;

`;
const Box = styled.div `


    h2{
        font-family: 'Alex Brush', cursive;
        color: #CB966A;
        font-size: 2.5rem;
        margin: .5rem  0 1rem 0;
    }

    h3{
        font-size: 1rem;
        font-weight: 600;
        margin-bottom:2rem;
    }
`;


const ImagesContainer = styled.div `
    
    display: grid;
    grid-gap: 2em;

    @media(min-width:1020px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2em;
    } 
    @media(max-width:920px){
        grid-template-columns: repeat(2, 1fr);
    } 
    @media(max-width:768px){
        grid-template-columns: repeat(1, 1fr);
    } 

    .image {
        img {
            width: 100%;
        }
    }

    .image:nth-child(even) img {
        filter: grayscale(1);
    }

    .image:nth-child(even) img:hover{
        filter: grayscale(0);
    }
    .image:nth-child(odd) img {
        filter: grayscale(0);
    }

    .image:nth-child(odd) img:hover{
        filter: grayscale(1);
    }
`; 