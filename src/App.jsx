import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Element } from 'react-scroll'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

// import quizSS1 from "./assets/screenshots/quizSS1.png";
// import quizSS2 from "./assets/screenshots/quizSS2.png";
// import quizSS3 from "./assets/screenshots/quizSS3.png";
// import quizSS4 from "./assets/screenshots/quizSS4.png";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';

function App() {

  // const test = [quizSS1, quizSS2, quizSS3, quizSS4];

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   adaptiveHeight: true
  // };
  
  return(
    <div className='mainContainer'>

      <Header/>

      <Element id='about' name='about' className='element'>

      <Hero/>

      </Element>


      <Element id='projects' name='projects' className='element'>

      <Projects/> 

      </Element>

      

    </div>

    // <Slider {...settings} className='slider'>
    //     {
    //       test.map((item, index) => (
    //         <div key={index} style={{height: "200px"}}>
    //           <img src={item} alt="img" style={{height: "400px"}}/>
    //         </div>
    //       ))
    //     }
    //   </Slider>
  );

}

export default App
