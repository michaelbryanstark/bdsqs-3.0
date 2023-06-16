import React, { useState } from 'react';
import cowboysmaller from "../images/cowboysmaller.jpeg"

const Carousel = () => {

    const [slides] = useState([
        {
            source: cowboysmaller,
            title: "Half Moon Pier"
        },
        {
            source: "../images/cowboysmaller.jpeg",
            title: "Port Washington Rocks"
        },
        {
            source: "../images/Cycle1Lower.jpeg",
            title: "Abandoned Rail"
        }
    ]);

    // SET CAROUSEL DEFAULTS
    let [currentPosition, setCurrentPosition] = useState(0); // Initial slide index value
    let currentSlide = slides[currentPosition]; // variable index value we can reference later

    const arrowRightClick = () => {
        currentPosition !== slides.length -1 ? // Check index length
        setCurrentPosition(currentPosition + 1) : setCurrentPosition(currentPosition = 0);
        currentSlide = slides[currentPosition];
    }

    const arrowLeftClick = () => {
        currentPosition !== 0 ? // Check index length
        setCurrentPosition(currentPosition - 1) : setCurrentPosition(currentPosition = slides.length - 1);
        currentSlide = slides[currentPosition];
    }

    return (
        <div className="carousel-block">
            <div className="flex-container">
                <div id="slider">
                    <div className="slide">
                        <img src={currentSlide.source} alt={currentSlide.title} title={currentSlide.title} className="slider-img" />
                        <div className="arrows">
                            <div id="arrow-left" onClick={arrowLeftClick}><i className="fas fa-arrow-alt-circle-left"></i></div>
                            <div id="arrow-right" onClick={arrowRightClick}><i className="fas fa-arrow-alt-circle-right"></i></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Carousel;