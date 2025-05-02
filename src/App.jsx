import './App.css'
import { Element } from 'react-scroll'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Loader from './components/Loader'
import { useState, useEffect } from 'react'

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If the document is already completely loaded, immediately hide the loader.
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      // Wait for the window's "load" event, which fires when all resources finish loading.
      window.addEventListener("load", () => {
        setLoading(false);
      });
    }
  }, []);

  return (
    <div className='mainContainer'>

      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />

          <Element id='about' name='about' className='element'>

            <Hero />

          </Element>


          <Element id='projects' name='projects' className='element'>

            <Projects />

          </Element>

          <div style={{ height: "50px" }}>

          </div>

          <Element id='skills' name='skills' className='element'>

            <Skills />

          </Element>

          <Element id='contact' name='contact' className='element'>

            <Contact />

          </Element>
        </>
      )}

    </div>

  );

}

export default App