import style from './Heading.module.css';
import Elipsis from '../Elipsis/Elipsis';
import { useEffect, useRef, useState } from 'react';

function Heading({ selectBoard, setIsModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const menu = menuRef.current;

    if (isMenuOpen) {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }, [isMenuOpen]);

  const menuRef = useRef(null);

  return (
    <>
      <div className={style.heading}>
        <h3>{selectBoard.name}</h3>
        <div className={style.modifyButton}>
          <button onClick={() => setIsModal('createTask')}>
            + Add New Task
          </button>
          <Elipsis setIsMenuOpen={setIsMenuOpen} />
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
      </div>
    </>
  );
}

export default Heading;
