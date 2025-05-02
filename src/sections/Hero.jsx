import picture from '../assets/images/Profile_Picture_Shadow.png';
import Button from '../components/Button';
import style from '../css/hero.module.css';

function Hero() {

  return (
    <>

      <div className={style.container}>

        <img src={picture} alt='img' className={style.picture} />

        <div className={style.introContainer}>

          <p className={style.name}>Binil Dangol</p>

          <h3>Web Dev Explorer | React.js Enthusiast</h3>

          <p className={style.intro}>Hello, I'm a final-year CSIT student with a strong programming foundation and an enduring passion for web development. I excel in HTML, CSS, JavaScript, and React.js, and have built practical experience through full-stack projects using the MERN stack. I thrive on crafting innovative, responsive, and user-centric designs, and I'm eager to contribute creative solutions while expanding my skills as an aspiring full-stack developer.</p>

        </div>


      </div>

      <Button text="Download CV" />

    </>
  );
}

export default Hero;