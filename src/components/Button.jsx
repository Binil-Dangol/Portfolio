import style from '../css/button.module.css';

function Button({ text }) {
  return (
    <>
      <div className={style.buttonWrapper}>
        <button className={style.button}>{text}</button>
      </div>
    </>
  );
}

export default Button;