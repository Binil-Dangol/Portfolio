import NavBar from '../components/NavBar';
import style from '../css/header.module.css'
import logo from '../assets/logos/logo.png'

function Header() {

  return (
    <>
      <div className={style.header}>
        
        <div className={style.logo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={style.links}>
          
          {/* <p>Home</p>
          <p>About</p>
          <p>Projects</p>
          <p>Contact</p> */}

          <NavBar/>

        </div>


      </div>
    </>
  );
}

export default Header;