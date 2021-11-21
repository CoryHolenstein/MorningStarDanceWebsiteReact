
import '../App.css';
import React, { useState, Component, useEffect, createContext, useContext } from 'react';
import NavigationBar from '../GlobalWebpageHooks/NavigationBar';
import TopBanner from '../GlobalWebpageHooks/TopBanner';
import Footer from '../GlobalWebpageHooks/Footer';

import Schedule from '../GlobalWebpageHooks/Schedule';
import { PDFViewer } from '@react-pdf/renderer';

const SchedulePage = () => {


    useEffect(() => {
        document.title = "Schedule"
    }, []);




    return (


        <div className="App">
            <TopBanner />
            <NavigationBar />

            <div className="content-about">
                <h1>Schedule</h1>
                       <Schedule/>
                <br></br>
            </div>
            <Footer />
        </div>

    );






}
export default SchedulePage;

/*
 * 
 *   <PDFViewer>
                    <Schedule />
                </PDFViewer>
 * */