import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Element } from 'react-scroll'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

function App() {
  
  return(
    <div className='mainContainer'>
      <Header/>

      <Element id='about' name='about' className='element'>
      <Hero/>

      </Element>


      <Element id='projects' name='projects'>
      <Projects/> 

      </Element>

    </div>
  );

}

export default App
