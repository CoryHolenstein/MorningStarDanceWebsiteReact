
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

            <div className="content-about">
                <h1>About Us!</h1>
                <p>MorningStar dance is an award winning dance studio located in johns creek. </p>
                <p>Founded in 2004, MorningStar Dance Academy of Atlanta (MSDA) offers high quality training in classical ballet, pointe, contemporary dance, jazz, character dance, and Chinese traditional folk dance.
                    The school's teaching methods offer students an age appropriate, challenging, and enjoyable
                    program that combines personal enrichment with technical preparation for professional work.</p>

                <p>The founder and artistic director of MSDA is Mr. Chen Xiao, a former professional dancer with almost thirty years of experience and a recipient of a top award at the International Ballet Competition in Osaka, Japan. He worked with other faculty members of MSDA to teach the discipline and technique necessary in dance education and to create a joyful and passionate learning environment.
                    By identifying and focusing on a student's individual capabilities, he is able to bring out the best in each dancer. In 2013, Mr. Chen Xiao received the "Outstanding Teacher" recognition from the Youth America Grand Prix (YAGP) regional semi-final, one of the most prestigious ballet competitions in the world,
                    for his passion and special contribution to ballet education.
                    </p>

            </div>
            <Footer />
        </div>

    );








}
export default About;
