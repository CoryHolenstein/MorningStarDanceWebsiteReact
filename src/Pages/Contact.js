
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
                    <br></br> <br></br> <br></br>
                </div>
            </div>
            <Footer />
        </div>

    );








}
export default Contact;
