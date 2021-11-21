
import '../App.css';
import React, { useState, Component, useEffect, createContext, useContext } from 'react';
import NavigationBar from '../GlobalWebpageHooks/NavigationBar';
import Slideshow from '../GlobalWebpageHooks/Slideshow';
import TopBanner from '../GlobalWebpageHooks/TopBanner';
import Footer from '../GlobalWebpageHooks/Footer';

const Home = () => {



    useEffect(() => {
        document.title = "MorningStar Dance | Home"
    }, []);



    return (


        <div className="App">
            <TopBanner />
            <NavigationBar />

            <div className="content-home">

               
                <Slideshow />
                <p> Welcome to MorningStar Dance studio! </p>
                <p> Your one-stop shop for all things dance. </p>
                <p> We specialize in Ballet, Jazz, Point, Traditional and Folk, as well as modern dance!</p>

                <br></br>
                <br></br>
                <br></br>
                </div>
            <Footer />
        </div>

    );








}
export default Home;
