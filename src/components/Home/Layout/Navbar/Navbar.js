import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [scrolled,setScrolled]= useState(false);
    const [visible, setVisible] = useState(false)

    const handleClick = () => setClick(!click);

    const handelScroll = () => {
  
        const offset=window.scrollY;
        if(offset > 20 ){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        
        if (scrolled > 200){
            setVisible(true)
        } 
        else if (scrolled <= 200){
            setVisible(false)
        }
    };


    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    useEffect(() => {
        
        window.addEventListener('scroll', handelScroll);
        window.addEventListener('scroll', toggleVisible);
    }, [])



    return (
        <>
            <NavContainer>
                <nav className={scrolled ? "nav scroll" : "nav"}>
                    <div className="navbar">
                        <Logo>
                            <img src="image/logo.png " alt="logo" />
                        </Logo>
                        <ul className={click ? "nav__menu active": "nav__menu"}>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#couple">Couple</a></li>
                            <li><a href="#ourStory">Our Story</a></li>
                            <li><a href="#event">Event</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#rsvp">R.S.V.P</a></li>
                        </ul>
                        <MenuBar onClick={handleClick}>
                            <div className={click ? "hamburger open" : "hamburger"}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </MenuBar>
                    </div>
                </nav>
            </NavContainer>
            <Mobile onClick={handleClick}>
                <div class={click ? "mobile__menu-list active" : "mobile__menu-list"}>
                    <ul>
                        <li><a href="#home" class="mobile__item">Home</a></li>
                        <li><a href="#couple" class="mobile__item">Couple</a></li>
                        <li><a href="#ourStory" class="mobile__item">Our Story</a></li>
                        <li><a href="#event" class="mobile__item">Event</a></li>
                        <li><a href="#friend" class="mobile__item">Friends</a></li>
                        <li><a href="#gallery" class="mobile__item">Gallery</a></li>
                        <li><a href="#rsvp" class="mobile__item">R.S.V.P</a></li>
                    </ul>
                </div>
            </Mobile>
            <BacktoTop>
                <button className={visible ? "top active" : "top"} onClick={scrollTop}><img src="image/arrow.png" alt="arrow" /></button>
            </BacktoTop>
              
        </>
    )
}

export default Navbar;

const BacktoTop = styled.div `
    
    .top {

        position: fixed;
        bottom: 20px;
        right: 10px;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        line-height: 50px;
        outline: none;
        border: none;
        padding: 10px;
        background: #cb966a;
        display: none;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

        img {
            width: 27px;
            transform: rotate(-90deg);
        }
    }

    .top.active{
        display: block;
        z-index: 9999;
        cursor: pointer;
    }

`;


const NavContainer = styled.div `
    
    .nav{
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 999;

        @media(max-width:920px){
            z-index:9999;
        }
    }

    @media(min-width:920px){
        .nav.scroll{
            background: #fff;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

            a{
                color:#000;
                transition: all .6s ease;
                scroll-behavior: smooth;

                &:hover{
                    color:#cb966a;
                }
            }
        }
    }
    .navbar{
        max-width: 1140px;
        margin: 0 auto;
        padding:10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    .nav__menu {
        display: flex;

        li{
            list-style: none;
            margin-left:20px;

            a {
                text-decoration: none;
                color: #fff;
                transition: all .6s ease;

                &:hover{
                    color:#cb966a;
                }
            }
        }


        @media(max-width:920px){
            display: none;
        }
    }

    
`;

const Logo = styled.div `

    img{
        display: none;

        @media(min-width:920px){
            width: 50px;
            display: block;
        }
    }
`;


const MenuBar = styled.div `
    display: none;
    
    .hamburger {
        position: relative;
        width: 27px;
        height: 22px;
        cursor: pointer;
        transform: rotate(0deg);
        transition: .5s ease-in-out;
    }

    .hamburger span {
        position: absolute;
        width: 100%;
        height: 2px;
        right: 4px;
        background: #fff;
        border-radius: 6px;
        transform: rotate(0deg);
        transition: .25s ease-in-out;
    }



    .hamburger span:nth-child(1) {
        top: 0;
    }

    .hamburger span:nth-child(2),
    .hamburger span:nth-child(3) {
        top: 8px;
    }

    .hamburger span:nth-child(4) {
        top: 16px;
    }

    .hamburger.open span:nth-child(1) {
        top: 10px;
        opacity: 0;
    }

    .hamburger.open span:nth-child(2) {
        transform: rotate(45deg);
    }

    .hamburger.open span:nth-child(3) {
        transform: rotate(-45deg);
    }

    .hamburger.open span:nth-child(4) {
        top: 10px;
        opacity: 0;
    }

    @media(max-width:920px){
        display: block;
        background: #cb966a;
        padding: 1rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        text-align: center;
        line-height: 55px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }


`;



const Mobile = styled.div `
    
    .mobile__menu-list{
        position: fixed;
        width: 100%;
        height: 100vh;
        background-color: #f4f4f4;
        z-index: 999;
        display: none;
    }

    .mobile__menu-list ul {
        padding-top: 2.5rem;
        text-align: center;
    }

    .mobile__menu-list ul li {
        margin: 3rem 0;
    }

    .mobile__menu-list ul li a {
        font-size: 20px;
        font-weight: 400;
        color: #000;
        text-transform: uppercase;
        text-decoration: none;
    }
    .mobile__menu-list ul li a:hover{
        color: #cb966a;
    }

 
    @media(max-width:920px){
        .mobile__menu-list.active{
            display: block;
        }
    }
`;