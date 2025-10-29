import { useEffect, useRef, useState } from 'react';
import Elipsis from '../../Elipsis/Elipsis';
import ModalSelect from '../components/ModalSelect';
import style from './DetailTask.module.css';

function DetailTask({ columns, selectTask, setIsModal, handler }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subtasks, setSubtasks] = useState(selectTask.subtasks);

  const completedTask = subtasks.reduce(
    (count, st) => count + (st.done ? 1 : 0),
    0
  );

  useEffect(() => {
    const menu = menuRef.current;

    if (isMenuOpen) {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }, [isMenuOpen]);

  const menuRef = useRef(null);

  const [currentStatus, setCurrentStatus] = useState(() => {
    const column = columns.find((col) =>
      col.tasks.some((t) => t.id === selectTask.id)
    );

    return column ? column.name : columns[0].name;
  });

  function handleSubtask(subtaskId) {
    setSubtasks((prevSubtasks) =>
      prevSubtasks.map((subtask) =>
        subtask.id === subtaskId ? { ...subtask, done: !subtask.done } : subtask
      )
    );
  }

  return (
    <div className={style.detailTask}>
      <div className={style.header}>
        <h3>{selectTask.title}</h3>
        <Elipsis setIsMenuOpen={setIsMenuOpen} />
        <div className={style.elipsisMenu} ref={menuRef}>
          <button
            onClick={() => {
              setIsModal('editTask');
              setIsMenuOpen(false);
            }}
          >
            Edit task
          </button>
          <button
            onClick={() => {
              setIsModal('deleteTask');
              setIsMenuOpen(false);
            }}
            className={style.deleteButton}
          >
            Delete task
          </button>
        </div>
      </div>
      <div className={style.subtaskContainer}>
        <h3>
          Subtask ({completedTask} of {subtasks.length})
        </h3>
        {subtasks.map((subtask) => (
          <div
            className={style.subtask}
            onClick={() => handleSubtask(subtask.id)}
            key={subtask.id}
          >
            <input type="checkbox" onChange={() => {}} checked={subtask.done} />
            <p>{subtask.title}</p>
          </div>
        ))}
      </div>
      <ModalSelect
        columns={columns}
        currentStatus={currentStatus}
        setCurrentStatus={setCurrentStatus}
      />
      <button
        type="button"
        className={style.saveButton}
        onClick={() => handler(selectTask, subtasks, currentStatus)}
      >
        Save
      </button>
    </div>
  );
}

export default DetailTask;
