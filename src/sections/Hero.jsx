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

          <p className={style.intro}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ab fugiat consectetur dicta? Eius, perspiciatis beatae quae expedita culpa sed ipsum iste eaque quam velit libero placeat aliquid voluptate officia et sequi minima tempore repudiandae eum odit! Blanditiis laborum quas perferendis, unde iusto, ut dignissimos atque, quibusdam dicta obcaecati officia.</p>

        </div>


      </div>

      <Button text="Download CV" />

    </>
  );
}

export default Hero;