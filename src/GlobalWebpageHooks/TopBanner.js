
import '../App.css';
import React, { useState, Component, useEffect, createContext, useContext } from 'react';
import BannerImage from '../Photos/top_banner.png';





const TopBanner = () => {







    return (


        <div className="App">


            <div className="BannerImage">
                <center><img class="MainBannerImage" src={BannerImage} alt="Mainbanner" /> </center>
            </div>
            <div>
                <h1 class="MainBannerText1"><center><span class="MainBannerText1A">Morning Star Dance Academy of Atlanta</span></center></h1></div><br />
            <div>
                <h4 class="MainBannerText2"><center><span class="MainBannerText2A">Learn dance to find the beauty and confident</span></center></h4></div><br />
          

        </div>




    );








}
export default TopBanner;

