
import '../App.css';
import React, { useState, Component, useEffect, createContext, useContext } from 'react';
import NavigationBar from '../GlobalWebpageHooks/NavigationBar';
import TopBanner from '../GlobalWebpageHooks/TopBanner';
import Footer from '../GlobalWebpageHooks/Footer';
import Xiao_Chen from '../Photos/Chen_Xiao.jpg';
import Aldawna from '../Photos/Aldawna.jpg';
import HuiJu from '../Photos/HuiJu.jpg';
import Amy from '../Photos/Amy.jpg';
import Sara from '../Photos/Sara.jpg';



const Instructors = () => {


    useEffect(() => {
        document.title = "MorningStar Dance | Instructors"
    }, []);




    return (


        <div>
            <TopBanner />
            <NavigationBar />

            <div className="content-instructors">
                <h1>Instructors</h1>
                <div>
                    <h3>Xiao Chen </h3>
                    <img src={Xiao_Chen} alt="XiaoChen" />
                    <p className="Instructors-p">Artistic director and choreographer, graduated from Beijing Dance Academy, China. For more than twenty years, he has played various roles in well over a hundred ballet performances.
                        Through his career, he has toured more than 50 countries and was invited repeatedly as a guest dancer by international ballet troupes.
                        In 1991, he received the Special Award for Best Individual Performance at the World Ballet Competition (WBC). As a leading dancer, he served two of the most renowned Chinese ballet companies: National Ballet of China and Shanghai Ballet. From 1992 to 2003, he was a principal dancer with the Atlanta Ballet (Atlanta, Georgia).
                        He was invited to dance at the World Ballet Top Performers Event in Seoul, South Korea in 2002. In 2004, he founded MorningStar Dance Academy of Atlanta (MSDA). With his unique qualifications, effective training methods, and a vision for ballet education, he guides MSDA to a successful and rapid growth path.
                        Students of MSDA have successfully performed in numerous local events and have been awarded with many national and regional championships and world finalists from different dance competitions
                        including ShowStopper, American Dance Championships (ADC), International Dance Challenge (IDC), American Ballet Competition (ABC), and Youth America Grand Prix (YAGP) - the world prestigious ballet competition for youth.
                        In 2013, Xiao Chen received the "Outstanding Teacher" recognition from YAGP for his passion and special contribution to ballet education.</p>
                    <hr></hr>

                    <h3>Aldawna</h3>
                    <img src={Aldawna} alt="Aldawna" />
                    <p>Began his dance training at the age of nine. He has danced with the Atlanta Ballet, Donald Byrd the Group, Complexion Ballet, the Elisa Monte Dance Company and the Cleo Parker Robinson Dance Company.
                        After many years of dancing and touring the world, Mr. Morrison decided to pursue teaching and furthering his education.
                        Mr. Morrison teaches at different schools throughout the Atlanta areas and the United States. He teaches contemporary and ballet in MSDA.</p>
                    <hr></hr>

                    <h3>Hui-Ju Young</h3>
                    <img src={HuiJu} alt="Huiju" />
                    <p>Received professional training at Yong Jia Chen and Si Ya Young in Taiwan. She furthered her training and received a certificate in traditional Chinese Dance from the Dance Institute of Central University for Nationalities in China in 1999.
                        She has participated in many dance competitions across Taiwan, mainland China, and Japan, including the prestigious China's Tao Li Cup Dance Competition. She won 1st place for both the traditional and classical Chinese dance divisions at the Taiwan National Dance Competition, and the Judges' Special Award from the Tao Li Cup Dance Competition.
                        From 2003 to 2004, she toured with the GinHwa Dance Troupe as Grand Champion of the Taiwan National Group Dance Competition.
                        Ms. Young has also been invited to perform as a solo dancer in different occasions.
                        She teaches Chinese traditional and folk dances in MSDA.</p>
                    <hr></hr>

                    <h3>Amy Chang</h3>
                    <img src={Amy} alt="Amy" />
                    <p>Began her dance training at the age of eight with the Taiwanese Dance Experimental Program, focusing on Chinese opera, Chinese classical and folk dances, ballet, modern dance, and dance improvisation under the direction of famous Cloud Gate Dance of Taiwan.
                        She was also trained vigorously in piano & voice. She received her B.A. in Dance/Theater from San Jose State University, under the direction of Gary Master (Jose Limon Dance Company co-artistic director) and Fred Matthews.
                        After graduation, she moved to New York City to pursue her dreams. For over a decade, she has traveled the world, appearing in national tours and performing abroad with major modern dance companies. Among her most vital work experiences is a role in the Broadway National Tour of the 'King and I' under direction of Baayork Lee.
                        She was a premiere cast member of first U.S. production of the French rock opera, 'Notre Dame de Paris,' directed by Gilles Maheu of Montreal.
                        Among her regional theater experiences are 'Cats' and 'Miss Saigon.' She has also performed in commercial works such as the MTV Music Awards Show, Elan Award, various music videos, print ads, private industrial shows (PGA tours and celebrity parties) and other small roles in independent films.
                        Adding to her diverse credits is a role in a Matthew Barney's art film, 'Creamaster 5',
                        featured in modern art museums all over the world. She teaches contemporary, jazz, and ballet in MSDA and is also a certified yoga instructor.</p>
                    <hr></hr>

                    <h3>Sara Cai</h3>
                    <img src={Sara} alt="Sara" />
                    <p>Graduated from the Dance Dept. of the PLA Academy of Arts and joined the General Political Department Song and Dance Troupe after graduation. During her over 10 years of dancing career, she has performed at many dancing events, gala, festivals and ceremonies.
                        She has also been teaching and choreographing Chinese traditional and folk dances in various dancing schools. Currently, she teaches Chinese traditional and folk dances in MSDA.</p>
                    <hr></hr>
                 </div>
             
                <br></br>
            </div>
            <Footer />
        </div>

    );








}
export default Instructors;

//<img class="MainBannerImage" src={BannerImage} alt="Mainbanner" />

/*
 * To delete an instructor, simply delete the "h3" tag, down to the "hr" tag, to add an instructor, simply copy an existing instructor, from "h3" tag to "hr" tag. Edit name and information. 
 * To change the photo, upload the image to the "photos" folder, and import it at the top. Change the "img src={"Sara"}" (for example) to the name of the file you just imported. 
 * 
 * 
 * */
