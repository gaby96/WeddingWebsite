import React,{ useState } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";


const Friend = () => {

    const [show, setShow] = useState(false)


    const showBride = () => {
        setShow(!show)
    }

    return (
        <>

            <FriendsContainer>
                <h1>Our best friends ever</h1>
                <h4>THANKS FOR BEING THERE</h4>
                <Box>
                    <div className="buttons">
                        <button onClick={showBride} className={show ? "bride " :"bride active"}>Bridesmaids</button>
                        <button onClick={showBride} className={show ? "bride active" :"bride "}>Groomsmen</button>
                    </div>
                    { show ?  (
                    <Bride>
                        <div className="box">
                            <img src="image/friends/b1.jpg" alt="Men" />
                            <h2>Setfano Smiht</h2>
                            <p>Enstibulum eringilla dui athe slitene miss minibus viverra nectar.</p>
                            <div className="social">
                                <FontAwesomeIcon icon={faFacebookF} className="icon"  />
                                <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
                                <FontAwesomeIcon icon={faInstagram} className="icon" />
                            </div>
                        </div>
                        <div className="box">
                            <img src="image/friends/b2.jpg" alt="Men" />
                            <h2>Matthew Brown</h2>
                            <p>Enstibulum eringilla dui athe slitene miss minibus viverra nectar.</p>
                            <div className="social">
                                <FontAwesomeIcon icon={faFacebookF} className="icon"  />
                                <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
                                <FontAwesomeIcon icon={faInstagram} className="icon" />
                            </div>
                        </div>
                        <div className="box">
                            <img src="image/friends/b3.jpg" alt="Men" />
                            <h2>Pablo Dante</h2>
                            <p>Enstibulum eringilla dui athe slitene miss minibus viverra nectar.</p>
                            <div className="social">
                                <FontAwesomeIcon icon={faFacebookF} className="icon"  />
                                <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
                                <FontAwesomeIcon icon={faInstagram} className="icon" />
                            </div>
                        </div>
                    </Bride>
                    ): (
                    <Bride>    
                        <div className="box">
                            <img src="image/friends/w1.jpg" alt="Women" />
                            <h2>Eleanor Chris</h2>
                            <p>Enstibulum eringilla dui athe slitene miss minibus viverra nectar.</p>
                            <div className="social">
                                <FontAwesomeIcon icon={faFacebookF} className="icon"  />
                                <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
                                <FontAwesomeIcon icon={faInstagram} className="icon" />
                            </div>
                        </div>
                        <div className="box">
                            <img src="image/friends/w2.jpg" alt="Women" />
                            <h2>Vanessa Brown</h2>
                            <p>Enstibulum eringilla dui athe slitene miss minibus viverra nectar.</p>
                            <div className="social">
                                <FontAwesomeIcon icon={faFacebookF} className="icon"  />
                                <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
                                <FontAwesomeIcon icon={faInstagram} className="icon" />
                            </div>
                        </div>
                        <div className="box">
                            <img src="image/friends/w3.jpg" alt="Women" />
                            <h2>Fredis Halle</h2>
                            <p>Enstibulum eringilla dui athe slitene miss minibus viverra nectar.</p>
                            <div className="social">
                                <FontAwesomeIcon icon={faFacebookF} className="icon"  />
                                <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
                                <FontAwesomeIcon icon={faInstagram} className="icon" />
                            </div>
                        </div>
                    </Bride>
                    )}
                </Box>
            </FriendsContainer>



        </>
    )
}

export default Friend;


const FriendsContainer = styled.div `

    max-width: 1140px;
    margin: 5rem auto 2rem auto;
    padding: 0 15px;


    h1{
        font-family: 'Alex Brush', cursive;
        color: #CB966A;
        font-size: 2.5rem;
        margin: .5rem  0 1rem 0;
    }

    h4{
        font-size: 1rem;
        font-weight: 600;
        margin-bottom:2rem;
    }

`;


const Box = styled.div `

    .buttons{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;

        button{
            width: 200px;
            outline: none;
            border: none;
            font-family: 'Sen',sans-serif;
            font-size: 1rem;
            font-weight: 500;
            border-radius: 3px;
            padding: .7rem 1rem;
            background: #CB966A;
            margin: 1rem;
            color: #000;
            text-transform: uppercase;
            cursor: pointer;
        }

        .bride.active{
            background: none;
            border: 2px solid #CB966A;
        }
    }

`;



const Bride = styled.div `

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
    @media(max-width:600px){
        grid-template-columns: repeat(1, 1fr);
    } 




    .box {

        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        padding: 1rem;
        background: #fff;
        text-align: center;

        h2{
            font-size: 1.3rem;
            font-weight: 500;
            margin: 1rem 0 .5rem 0;
        }
        p{
            font-size: .9rem;
            font-weight: 500;
            line-height: 1.4rem;
            margin: 0 3rem;
            margin-bottom: 1rem;
        }

        img{
            width: 150px;
            border-radius: 50%;
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
    }
`;