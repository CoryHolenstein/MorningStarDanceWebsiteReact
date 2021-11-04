import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import dance_image_one from '../Photos/dance_1.jpg';
import dance_image_two from '../Photos/dance_2.jpg';
import dance_image_three from '../Photos/dance_3.jpg';
import dance_image_four from '../Photos/dance_4.jpg';

const slideImages = [
    {
        url: dance_image_one,
        caption: 'Slide 1'
    },
    {
        url: dance_image_two,
        caption: 'Slide 2'
    },
    {
        url: dance_image_three,
        caption: 'Slide 3'
    },
    {
        url: dance_image_four,
        caption: 'Slide 4'
    },
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div className="each-slide" key={index}>
                        <div>
                            <img src={slideImage.url} width="35%" height="32%" /><br></br>
                            <span>{slideImage.caption}</span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default Slideshow;