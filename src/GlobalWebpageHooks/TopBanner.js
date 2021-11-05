
import '../App.css';
import React, { useState, Component, useEffect, createContext, useContext } from 'react';
import BannerImage from '../Photos/top_banner.png';





const TopBanner = () => {







    return (


        <div className="App">

            <header>
            <div className="BannerImage">
                <center><img class="MainBannerImage" src={BannerImage} alt="Mainbanner" /> </center>
            </div>
           </header>

        </div>




    );








}
export default TopBanner;

