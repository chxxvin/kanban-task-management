import style from './Elipsis.module.css';

function Elipsis({ setIsMenuOpen }) {
  return (
    <div className={style.elipsisContainer}>
      <div
        className={style.elipsis}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <div className={style.circle}></div>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
      </div>
    </div>
  );
}

export default Elipsis;
