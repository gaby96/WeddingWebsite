import React from 'react';
import Navbar from './Layout/Navbar/Navbar';
import Header from './Layout/Header/Header';
import Couple from './Layout/Couple/Couple';
import Story from './Layout/Story/Story';
import Gallery from './Layout/Gallery/Gallery';
import RSVP from './Layout/RSVP/RSVP';
import DotsMemory from './Layout/DotsMemory/DotsMemory';
import BannerOne from './Layout/Banner-1/BannerOne';
import Event from './Layout/Event/Event';
import WeddingDetails from './Layout/WeddingDetails/WeddingDetails';
import Footer from './Layout/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Navbar />
            <div id="home">
                <Header />
            </div>
            <div id="couple">
                <Couple />
            </div>
            <div id="ourStory">
                <Story />
            </div>
            <BannerOne />
            <div id="event">
                <Event />
            </div>
            <div id="dots">
                <DotsMemory />
            </div>
            <div id="gallery">
                <Gallery />
            </div>
            <div id="weddingdetails">
                <WeddingDetails />
            </div>
            <div id="rsvp">
                <RSVP />
            </div>
            <Footer />
        </div>
    )
}

export default Home;


