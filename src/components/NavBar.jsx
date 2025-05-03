import style from '../css/navbuttons.module.css';
import { useEffect } from 'react';
import { Link, scrollSpy } from 'react-scroll';

function NavBar() {

  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <>

      <Link
        to="about"
        isDynamic={true}
        spy={true}             
        smooth={true}
        duration={500}
        offset={-90}           
        className={style.navButton}
        activeClass={style.active}
      >
        About Me
      </Link>
      
      <Link
        to="projects"
        isDynamic={true}
        spy={true}
        smooth={true}
        duration={500}
        className={style.navButton}
        activeClass={style.active}
      >
        Projects
      </Link>

      <Link
        to="skills"
        isDynamic={true}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className={style.navButton}
        activeClass={style.active}
      >
        Skills
      </Link>
      
      <Link
        to="contact"
        isDynamic={true}
        spy={true}
        smooth={true}
        duration={500}
        offset={-10}
        className={style.navButton}
        activeClass={style.active}
      >
        Contact
      </Link>
    </>
  );
}

export default NavBar;