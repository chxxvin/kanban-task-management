import { useEffect, useRef, useState } from 'react';
import style from './Heading.module.css';

function Heading({ selectBoard, setIsModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;

    if (isMenuOpen) {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }, [isMenuOpen]);

  return (
    <>
      <div className={style.heading}>
        <h3>{selectBoard.name}</h3>
        <div className={style.modifyButton}>
          <button onClick={() => setIsModal('createTask')}>
            + Add New Task
          </button>
          <div
            className={style.elipsis}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <div className={style.circle}></div>
            <div className={style.circle}></div>
            <div className={style.circle}></div>
          </div>
        </div>
      </div>
      <div className={style.elipsisMenu} ref={menuRef}>
        <button
          onClick={() => {
            setIsModal('editBoard');
            setIsMenuOpen(false);
          }}
        >
          Edit board
        </button>
        <button
          onClick={() => {
            setIsModal('deleteBoard');
            setIsMenuOpen(false);
          }}
          className={style.deleteButton}
        >
          Delete board
        </button>
      </div>
    </>
  );
}

export default Heading;
