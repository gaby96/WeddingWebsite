import React from 'react';
import styled from 'styled-components';

const RSVP = () => {

    return (
        <>

            <Container>
                <Box>
                    <div className="form__box">
                        <h2>Will you attend?</h2>
                        <div className="title">R.S.V.P</div>
                        <form className="form">
                            <FormDiv className="form_div">
                                <label htmlFor="name">Name<span>*</span> </label>
                                <input 
                                    id="name"
                                    type="text" 
                                    name="name"
                                    placeholder="*****" 
                                />
                            </FormDiv>
                            <FormDiv>
                                <label htmlFor="email">Email<span>*</span> </label>
                                <input 
                                    id="email"
                                    type="email" 
                                    name="email"
                                    placeholder="*****" 
                                />
                            </FormDiv>
                            <FormDiv>
                                <label htmlFor="guest">Guest<span>*</span> </label>
                                <input 
                                    id="guest"
                                    type="text" 
                                    name="guest"
                                    placeholder="*****" 
                                />
                            </FormDiv>
                            <FormDiv className="form_div">
                                <label htmlFor="message">Message<span>*</span> </label>
                                <textarea 
                                    id="message"
                                    type="text" 
                                    name="message"
                                    placeholder="*****" 
                                ></textarea>
                            </FormDiv>
                            <Button type="submit">Send</Button>
                        </form>
                    </div>
                </Box>
            </Container>

        </>
    )
}

export default RSVP;



const Container = styled.div `
    width: 100%;
    height: 100%;
    background: url('image/banner/banner-2.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 1;
    margin: 7rem  0 5rem 0;


    &::before{
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.4);
        z-index: -1;
    }
`;


const Box = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 0 15px;
    
    .form__box{
        width: 100%;
        padding: 1rem;
        background: #fff;
        border-radius: 3px;
        margin: 7rem 0;

        h2{
           text-align: center;
           font-family: 'Alex Brush', cursive;
            color: #CB966A;
            font-size: 2.5rem;
            margin: .5rem  0 1rem 0; 
        }

        .title{
            text-align: center;
            margin-bottom: 1rem;
            font-size: 1.7rem;
            font-weight: 500;
        }

        p{
            margin-top: 1rem;

            .link {
                text-decoration: none;
                color: rgb(24, 71, 199);
            }
        }

        form{
            width: 100%;
        }
        
        @media(min-width:650px){
            width: 450px;
        }
    }
`;



const FormDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;

    label{
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: .4rem;

        span {
            color: crimson;
        }
    }

    input,
    textarea{
        font-size: 1rem;
        font-weight: 500;
        font-family: "Sen",sans-serif;
        padding: .8rem;
        border-radius: 3px;
        outline: none;
        border: 1px solid #ddd;
    }

    textarea{
        resize: none;
        height: 100px;
    }

    p{
        color: crimson;
        font-weight: 600;
    }
`;

const Button = styled.button `
    width: 100%;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Sen',sans-serif;
    padding: .8rem;
    border-radius: 3px;
    outline: none;
    border: none;
    background: #cb966a;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

