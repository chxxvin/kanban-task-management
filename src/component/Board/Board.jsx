import { useEffect, useRef } from 'react';
import Task from '../Task/Task';
import style from './Board.module.css';
import dummy from '../../data/dummy';

const data = dummy;

console.log(dummy);

function Board({ isSidebarHide, selectBoard }) {
  const [dataBoard] = data.filter((board) => board.id === selectBoard.id);
  const boardRef = useRef(null);

  const colBoard = dataBoard.columns;

  console.log(colBoard);

  useEffect(() => {
    const board = boardRef.current;
    if (isSidebarHide) {
      board.classList.add(`${style.full}`);
    } else {
      board.classList.remove(`${style.full}`);
    }
  }, [isSidebarHide]);

  return (
    <div className={style.board} ref={boardRef}>
      {colBoard.map((col, index) => {
        return (
          <div className={style.column} key={index}>
            <h3 className={style.columnName}>
              {col.name} ({col.tasks.length})
            </h3>
            {col.tasks.map((task, index) => (
              <Task task={task} key={index} />
            ))}
          </div>
        );
      })}
      <div className={style.addColumn}>+ New Column</div>
    </div>
  );
}

export default Board;
