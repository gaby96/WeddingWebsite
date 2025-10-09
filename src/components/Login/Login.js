import React from 'react';
import styled from 'styled-components';
import useForm from './useForm';
import validate from './validateInfo';

const Login = () => {


    const { handleChange, handleSubmit, values, error } = useForm(validate);

    return (
        <>

            <Container>
                <Box>
                    <div className="form__box">
                        <div className="title">Registration</div>
                        <form className="form" onSubmit={handleSubmit}>
                            <FormDiv className="form_div">
                                <label htmlFor="name">Name<span>*</span> </label>
                                <input 
                                    id="name"
                                    type="text" 
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    placeholder="*****" 
                                />
                                {error.name && <p>{error.name}</p>}
                            </FormDiv>
                            <FormDiv className="form_div">
                                <label htmlFor="phone">Phone No.<span>*</span> </label>
                                <input 
                                    id="phone"
                                    type="text" 
                                    name="phone" 
                                    value={values.phone}
                                    onChange={handleChange}
                                    placeholder="*****" 
                                />
                                {error.phone && <p>{error.phone}</p>}
                            </FormDiv>
                            <FormDiv className="form_div">
                                <label htmlFor="city">city/village<span>*</span> </label>
                                <input 
                                    id="city"
                                    type="text" 
                                    name="city" 
                                    value={values.city}
                                    onChange={handleChange}
                                    placeholder="*****" 
                                />
                                {error.city && <p>{error.city}</p>}
                            </FormDiv>
                            <FormDiv className="form_div">
                                <label htmlFor="district">District<span>*</span> </label>
                                <input 
                                    id="district"
                                    type="text" 
                                    name="district" 
                                    value={values.district}
                                    onChange={handleChange}
                                    placeholder="*****" 
                                />
                                {error.district && <p>{error.district}</p>}
                            </FormDiv>
                            <FormDiv className="form_div">
                                <label htmlFor="pincode">Pincode<span>*</span> </label>
                                <input 
                                    id="pincode"
                                    type="text" 
                                    name="pincode"
                                    value={values.pincode}
                                    onChange={handleChange} 
                                    placeholder="*****" 
                                />
                                {error.pincode && <p>{error.pincode}</p>}
                            </FormDiv>
                            
                            <Button type="submit">Register</Button>
                        </form>
                    </div>
                </Box>
            </Container>

        </>
    )
}

export default Login;



const Container = styled.div `
    width: 100%;
    height: 100%;
    background: url('image/banner/banner-2.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    z-index: 1;


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
        margin: 3rem 0;

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

    input{
        font-size: 1rem;
        font-weight: 500;
        font-family: "Sen",sans-serif;
        padding: .8rem;
        border-radius: 3px;
        outline: none;
        border: 1px solid #ddd;
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

