
import '../App.css';
import React, { useState, Component, useEffect, createContext, useContext } from 'react';
import BannerImage from '../Photos/top_banner.png';





const TopBanner = () => {







    return (


        <div className="header">

            <header>
            <div className="BannerImage">
                <center><img class="MainBannerImage" src={BannerImage} alt="Mainbanner" /> </center>
            </div>
           </header>

        </div>




    );








}
export default TopBanner;
/*
 * This is the main banner image that sits at the top of every page. To edit it, rename the desired photo to "top_banner.png", navigate to the Photos folder, delete the old picture named "top_banner.png" and put in the new one.
 *
 * 
 * */
