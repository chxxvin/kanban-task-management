import style from './Heading.module.css';

function Heading({ selectBoard }) {
  return (
    <div className={style.heading}>
      <h3>{selectBoard}</h3>
      <div className={style.modifyButton}>
        <button>+ Add New Task</button>
        <div className={style.elipsis}>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
