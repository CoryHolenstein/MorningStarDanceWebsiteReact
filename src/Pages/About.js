
import '../App.css';
import React, { useState, Component, useEffect, createContext, useContext } from 'react';
import NavigationBar from '../GlobalWebpageHooks/NavigationBar';
import TopBanner from '../GlobalWebpageHooks/TopBanner';
import Footer from '../GlobalWebpageHooks/Footer';

const About = () => {


    useEffect(() => {
        document.title = "About"
    }, []);




    return (


        <div className="App">
            <TopBanner />
            <NavigationBar />

            <div className="content">

                <p> Hello there </p>

            </div>
            <Footer />
        </div>

    );








}
export default About;
