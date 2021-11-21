
import '../App.css';
import React, { useState, Component, useEffect, createContext, useContext } from 'react';
import NavigationBar from '../GlobalWebpageHooks/NavigationBar';
import TopBanner from '../GlobalWebpageHooks/TopBanner';
import Footer from '../GlobalWebpageHooks/Footer';

const Classes = () => {


    useEffect(() => {
        document.title = "MorningStar Dance | Classes"
    }, []);




    return (


        <div className="App">
            <TopBanner />
            <NavigationBar />

            <div className="content-classes">
                <h1>Classes Offered</h1>
                <p> Classical Ballet </p>
                <p> Contemporary Ballet </p>
                <p> Point </p>
                <p> Modern </p>
                <p> Character</p>
                <p> Jazz </p>
                <p> Chinese Traditional and Folk Dance </p>
                <p> Adult exercises </p>
                <p> Adult Chinese Tradional and Folk </p>
            
                <br></br>
            </div>
            <Footer />
        </div>

    );








}
export default Classes;
/*
 * To add another class, add <p> </p> and add text in between. 
 * 
 * */