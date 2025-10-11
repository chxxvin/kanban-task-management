import style from './Sidebar.module.css';
import iconBoard from '../../assets/icon-board.svg';
import iconDark from '../../assets/icon-dark-theme.svg';
import iconLight from '../../assets/icon-light-theme.svg';
import iconHide from '../../assets/icon-hide-sidebar.svg';

function Sidebar({ boards, selectBoard }) {
  return (
    <div className={style.sidebar}>
      <h3>ALL BOARDS ({boards.length})</h3>
      <ul>
        {boards.map((board, i) => {
          return (
            <li key={i} className={selectBoard === board ? style.selected : ''}>
              <img src={iconBoard} alt="icon-board" />
              {board}
            </li>
          );
        })}
        <li className={style.createBoard}>
          <img src={iconBoard} alt="icon-board" /> + Create New Board
        </li>
      </ul>
      <div className={style.changeTheme}>
        <img src={iconLight} alt="icon light theme" />
        <div className={style.switch}>
          <div className={style.ball}></div>
        </div>
        <img src={iconDark} alt="icon dark theme" />
      </div>
      <div className={style.hideSidebar}>
        <img src={iconHide} alt="icon hide side bar" />
        Hide Sidebar
      </div>
    </div>
  );
}

export default Sidebar;
