
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
                <p>Founded in 2004, MorningStar Dance Academy of Atlanta (SDA) offers high quality training in classical ballet, pointe, contemporary dance, jazz, character dance, and Chinese traditional folk dance.
                </p>
              
                    <center>
                <iframe class="about-video" height="250px" width="75%" max-width="50%" max-height="290px"
                    src="https://www.youtube.com/embed/xMFcZLnZ1H4">
                        </iframe>
                    </center>
                
                <p>
                    The school's teaching methods offer students an age appropriate, challenging, and enjoyable
                    program that combines personal enrichment with technical preparation for professional work.</p>

                <p>The founder and artistic director of MSDA is Mr. Chen Xiao, a former professional dancer with almost thirty years of experience and a recipient of a top award at the International Ballet Competition in Osaka, Japan. He worked with other faculty members of MSDA to teach the discipline and technique necessary in dance education and to create a joyful and passionate learning environment.
                    By identifying and focusing on a student's individual capabilities, he is able to bring out the best in each dancer. In 2013, Mr. Chen Xiao received the "Outstanding Teacher" recognition from the Youth America Grand Prix (YAGP) regional semi-final, one of the most prestigious ballet competitions in the world,
                    for his passion and special contribution to ballet education.
                    </p>
                <p>
                    Students of MSDA are offered many performance opportunities throughout the year.
                    They participate frequently in local community activities such as multi-cultural festivals and celebrations, and are also provided many opportunities to perform whole act ballets such as
                    </p><p>
                    Coppelia, Sleeping Beauty, Swan Lake, etc. This allows them to gain valuable stage experiences as well as confidence to perform in the future.
                </p>
      
                <p>

                    Founded in 2004, MorningStar Dance Academy of Atlanta (MSDA) offers high quality training in classical ballet, pointe, contemporary dance, jazz, character dance, and Chinese traditional folk dance. The school's teaching methods offer students an age appropriate, challenging, and enjoyable program that combines personal enrichment with technical preparation for professional work.

                    The founder and artistic director of MSDA is Mr. Chen Xiao, a former professional dancer with almost thirty years of experience and a recipient of a top award at the International Ballet Competition in Osaka, Japan. He worked with other faculty members of MSDA to teach the discipline and technique necessary in dance education and to create a joyful and passionate learning environment.
                    By identifying and focusing on a student's individual capabilities, he is able to bring out the best in each dancer. In 2013, Mr. Chen Xiao received the "Outstanding Teacher" recognition from the Youth America Grand Prix (YAGP) regional semi-final, one of the most prestigious ballet competitions in the world, for his passion and special contribution to ballet education.
                </p> <p>
                    Students of MSDA are offered many performance opportunities throughout the year. They participate frequently in local community activities such as multi-cultural festivals and celebrations, and are also provided many opportunities to perform whole act ballets such as Coppelia, Sleeping Beauty, Swan Lake, etc. This allows them to gain valuable stage experiences as well as confidence to perform in the future.
                    </p> <p>
                    In 2014, MorningStar Dance Academy received the "Most Outstanding School" award at the YAGP regional semi-final competition for its consistent performance and dedication to dance education. Over the years, students from MSDA received several first places in the classical ballet, contemporary and ensemble categories in YAGP semi-finals and also
                    </p> <p>
                    qualified many times for the international finals in New York. Students also won many high awards at other national and international dance competitions such as Showstopper, International Dance Challenge (IDC), American Dance Championships (ADC), World Ballet Competition (WBC), and American Ballet Competition (ABC). Due to their achievements, several students were awarded full scholarships to top professional ballet schools such as Joffrey Ballet School,
                    The Rock School of Dance Education, Princess Grace Academy of Classical Dance, etc. Furthermore, a graduate of MSDA was accepted with a scholarship this year to study in dance at the renowned Tisch School of the Arts of New York University.
                    Most recently, a current student was the prizewinner of a distinguished professional ballet competition, Beijing International Ballet and Choreography competition (IBCC) on July 2015.
                </p>
                <br></br>
            </div>
            <Footer />
        </div>

    );








}
export default About;
