import style from './Sidebar.module.css';
import iconBoard from '../../assets/icon-board.svg';
import iconDark from '../../assets/icon-dark-theme.svg';
import iconLight from '../../assets/icon-light-theme.svg';
import iconHide from '../../assets/icon-hide-sidebar.svg';
import { useEffect, useRef, useState } from 'react';

function onSelectBoard(board, setSelectBoard) {
  setSelectBoard(board);
}

function Sidebar({
  itemBoards,
  selectBoard,
  setSelectBoard,
  isSidebarHide,
  setIsSidebarHide,
  setIsModal,
}) {
  const [lightMode, setLightMode] = useState(true);

  const sidebarRef = useRef(null);
  const ballRef = useRef(null);

  useEffect(() => {
    const ball = ballRef.current;
    if (!lightMode) {
      ball.style.left = 'auto';
      ball.style.right = '3px';
    } else {
      ball.style.left = '3px';
      ball.style.right = '';
    }
  }, [lightMode]);

  return (
    <div
      className={`${style.sidebar} ${isSidebarHide ? style.close : ''}`}
      ref={sidebarRef}
    >
      <div className={style.container}>
        <h3>ALL BOARDS ({itemBoards.length})</h3>
        <ul>
          {itemBoards.map((board, i) => {
            return (
              <li
                key={i}
                className={
                  selectBoard.name === board.name ? style.selected : ''
                }
                onClick={
                  selectBoard !== board.name
                    ? () => onSelectBoard(board, setSelectBoard)
                    : undefined
                }
              >
                <img src={iconBoard} alt="icon-board" />
                {board.name}
              </li>
            );
          })}
          <li
            className={style.createBoard}
            onClick={() => setIsModal('createBoard')}
          >
            <img src={iconBoard} alt="icon-board" /> + Create New Board
          </li>
        </ul>
        <div className={style.changeTheme}>
          <img src={iconLight} alt="icon light theme" />
          <div
            className={style.switch}
            onClick={() => setLightMode(!lightMode)}
          >
            <div className={style.ball} ref={ballRef}></div>
          </div>
          <img src={iconDark} alt="icon dark theme" />
        </div>
        <div
          className={style.hideSidebar}
          onClick={() => setIsSidebarHide(!isSidebarHide)}
        >
          <img src={iconHide} alt="icon hide side bar" />
          Hide Sidebar
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
