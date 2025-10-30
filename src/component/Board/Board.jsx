import { useEffect, useRef } from 'react';
import Task from '../Task/Task';
import style from './Board.module.css';

function Board({ isSidebarHide, board, setSelectTask, setIsModal }) {
  const boardRef = useRef(null);
  const colBoard = board ? board.columns : [];

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
      {colBoard.map((col) => {
        return (
          <div className={style.column} key={col.id}>
            <h3 className={style.columnName}>
              {col.name} ({col.tasks.length})
            </h3>
            {col.tasks.map((task) => (
              <Task
                task={task}
                key={task.id}
                handler={() => {
                  setSelectTask(task);
                  setIsModal('detailTask');
                }}
              />
            ))}
          </div>
        );
      })}
      <div className={style.addColumn} onClick={() => setIsModal('editBoard')}>
        + New Column
      </div>
    </div>
  );
}

export default Board;
