import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
    {
        url: '../Photos/dance_1.jpg',
        caption: 'Slide 1'
    },
    {
        url: '../Photos/dance_2.jpg',
        caption: 'Slide 2'
    },
    {
        url: '../Photos/dance_3.jpg',
        caption: 'Slide 3'
    },
    {
    url: '../Photos/dance_4.jpg',
    caption: 'Slide 4'
    },
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                            <span>{slideImage.caption}</span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default Slideshow;