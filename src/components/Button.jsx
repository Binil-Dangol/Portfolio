import style from '../css/button.module.css';

function Button({ text }) {
  return (
    <>
      <div className={style.buttonWrapper}>
        <a href={`${process.env.PUBLIC_URL}/files/Binil_Dangol_CV.pdf`} download><button className={style.button}>{text}</button></a>
      </div>
    </>
  );
}

export default Button;