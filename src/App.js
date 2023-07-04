import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import image from './components/MicrosoftTeams-image (1).png'
import "slick-carousel/slick/slick-theme.css";
import Carousel from './components/Carousel';
function App() {
  const slides = [
    <div> <img src={image}></img> </div>,
    <div> <img src={image}></img> </div>
    // Add more slides as needed
  ];
  return (
    <div className="App">
      <div className='comp'>
        comp1
      </div>
      <Carousel slides={slides} />
      <div className='comp'>
        comp2
      </div>
    </div>
  );
}

export default App;
