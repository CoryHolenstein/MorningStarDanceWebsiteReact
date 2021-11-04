
import '../App.css';
import React, {  useEffect,  useRef } from 'react';
import NavigationBar from '../GlobalWebpageHooks/NavigationBar';
import TopBanner from '../GlobalWebpageHooks/TopBanner';
import Footer from '../GlobalWebpageHooks/Footer';

import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_g4oYOtObrTqkhRVkjkxKh");

const Contact = () => {

    const form = useRef();

    useEffect(() => {
        document.title = "Contact Us"
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('default_service', 'template_contactus', form.current, 'user_g4oYOtObrTqkhRVkjkxKh')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });


    }





    return (


        <div className="App">
            <TopBanner />
            <NavigationBar />

            <div className="content">
                <div className="flex-container">
                    <center><img class="ContactBanner" src="http://info.morningstardance.com/img/schoolpic2.jpg" alt="" width="35%" max-wdith="45%" height="15%" max-height="35%" /> </center>
                  
                    <h3> MorningStar Dance Academy Of Atlanta </h3>
                    <h2> Call us! </h2>
                    <h3>678-516-3026</h3>
                    <h1>   Email us!  </h1>
                    <form ref={form} onSubmit={sendEmail} >
                        <label>Name</label>
                        <input type="text" name="name" /> <br></br>
                        <label>Email</label>
                        <input type="email" name="email" /> <br></br>
                        <label>Message</label>
                        <textarea name="message" />  <br></br>
                        <input type="file" name="file" /> <br></br>
                        <input type="submit" value="Send" /> <br></br>
                    </form>
                
                </div>
                <div>
                    
                    <h1>   Find us on the map!  </h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m22!1m12!1m3!1d6612.526760145756!2d-84.18537675807148!3d34.03711438033804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m7!1i0!3e6!4m0!4m3!3m2!1d34.0351913!2d-84.184489!5e0!3m2!1sen!2sus!4v1408325733450" width="350" height="150" frameborder="0" allowfullscreen=""></iframe>
                      
                    </div>
            </div>
            <Footer />
        </div>

    );








}
export default Contact;
