import NavBar from '../components/NavBar';
import style from '../css/header.module.css'

function Header() {

  return (
    <>
      <div className={style.header}>
        
        <div className={style.logo}>
          <img src="/vite.svg" alt="logo" />
          <h2>Logo</h2>
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