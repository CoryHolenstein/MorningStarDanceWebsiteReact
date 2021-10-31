
import '../App.css';
import React, { useState, Component, useEffect, createContext, useContext } from 'react';
import NavigationBar from '../GlobalWebpageHooks/NavigationBar';
import Slideshow from '../GlobalWebpageHooks/Slideshow';
import TopBanner from '../GlobalWebpageHooks/TopBanner';
import Footer from '../GlobalWebpageHooks/Footer';

const Home = () => {



    useEffect(() => {
        document.title = "Home"
    }, []);



    return (


        <div className="App">
            <TopBanner />
            <NavigationBar />

            <div className="content">

                <p> Hello there </p>
                <Slideshow />
                </div>
            <Footer />
        </div>

    );








}
export default Home;
