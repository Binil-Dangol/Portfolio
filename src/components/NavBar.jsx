import style from '../css/navbuttons.module.css';
import { Link } from 'react-scroll';

function NavBar() {
  return (
    <>

      <Link
        to="about"
        spy={true}             // Enables active monitoring
        smooth={true}
        duration={500}
        offset={-70}           // Adjust if your header overlays the content
        className={style.navButton}
        activeClass={style.active}
      >
        About Me
      </Link>
      
      <Link
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        className={style.navButton}
        activeClass={style.active}
      >
        Projects
      </Link>

      {/* Make sure you have an Element for "skills" in App.jsx */}
      <Link
        to="skills"
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
        className={style.navButton}
        activeClass={style.active}
      >
        Skills
      </Link>
      
      {/* Make sure you have an Element for "contact" in App.jsx */}
      <Link
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
        className={style.navButton}
        activeClass={style.active}
      >
        Contact
      </Link>
    </>
  );
}

export default NavBar;