
import '../App.css';
import React, { useState, Component, useEffect, createContext, useContext } from 'react';
import NavigationBar from '../GlobalWebpageHooks/NavigationBar';
import TopBanner from '../GlobalWebpageHooks/TopBanner';
import Footer from '../GlobalWebpageHooks/Footer';

import { PDFViewer } from '@react-pdf/renderer';

import Fall_Calendar from '../Files/Fall_Calendar.pdf'
const SchedulePage = () => {


    useEffect(() => {
        document.title = "MorningStar Dance | Schedule"
    }, []);




    return (


        <div className="App">
            <TopBanner />
            <NavigationBar />

            <div className="content-schedule">
                <h1>Schedule</h1>
                <object src={Fall_Calendar} type="application/pdf" width="100%" height="100%">
                    <p>If your web browser doesn't have a PDF plugin,
                        you can <a href={Fall_Calendar}>click here to
                            download the PDF file.</a></p>
                </object>
                <embed src={Fall_Calendar} type="application/pdf" width="100%" height="600px" />
             
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