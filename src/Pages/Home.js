
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

               
                <Slideshow />
                <p> Welcome to MorningStar Dance studio </p>
                </div>
            <Footer />
        </div>

    );








}
export default Home;
