
import '../App.css';
import React, { useState, Component, useEffect, createContext, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import NavigationBar from '../GlobalWebpageHooks/NavigationBar';
import TopBanner from '../GlobalWebpageHooks/TopBanner';
import Footer from '../GlobalWebpageHooks/Footer';
import facebook_logo from '../Logos/facebook-logo.png';
import instagram_logo from '../Logos/instagram-logo.png';
import youtube_logo from '../Logos/youtube-logo.png';


const Connect = () => {


    useEffect(() => {
        document.title = "MorningStar Dance | Connect"
    }, []);




    return (


        <div className="connect">
            <TopBanner />
            <NavigationBar />

            <div className="content-connect">
                <h1>Connect with us on social media!</h1>
                <div className="d-grid gap-3">
                    <a href="https://www.facebook.com/MorningStar-Dance-Academy-of-Atlanta-160797744008230/" title="facebook image">
                    <Button variant="primary" size="lg">
                            Facebook
                            <img src={facebook_logo} width="30" height="30" alt="facebook icon png background" />
                        </Button></a>

                    <a href="https://www.instagram.com/morningstardance/" title="Image from freepnglogos.com">
                    <Button variant="secondary" size="lg">
                            Instagram
                            <img src={instagram_logo} width="30" height="30" alt="instagram transparent logo png images" />
                        </Button></a>

                    <a href="https://www.youtube.com/user/morningstardance" title="Image from freepnglogos.com">
                    <Button variant="danger" size="lg">
                            Youtube
                            <img src={youtube_logo}width="30" height="30" alt="for youtube logo png transparent" />
                        </Button></a>
                </div>

            </div>
            <Footer />
        </div>

    );








}
export default Connect;
/*
 * 
 * To add a link - copy a format from above and edit - img src="" should be the link to the desired page. Variant="" is the color of the button, and to my knowledge there is three, primary, secondary and danger, which is blue, grey and red respectively. 
 * 
 * */