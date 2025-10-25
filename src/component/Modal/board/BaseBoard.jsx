import { useState } from 'react';
import style from './BaseBoard.module.css';
import ModalTitle from '../components/ModalTitle';
import DynamicList from '../components/DynamicList';

function BaseBoard({ title, board = null, handler, setData, setIsModal }) {
  const [boardTitle, setBoardTitle] = useState(board ? board.name : '');

  const initialValue = board
    ? board.columns
    : [
        {
          id: `col-${crypto.randomUUID()}`,
          name: 'Todo',
          tasks: [],
        },
        {
          id: `col-${crypto.randomUUID()}`,
          name: 'Doing',
          tasks: [],
        },
      ];

  const template = {
    id: '',
    name: '',
    tasks: [],
  };

  function handleSubmitBoard(e) {
    e.preventDefault();
    handler(boardTitle, initialValue, setData, setIsModal);
  }

  return (
    <div>
      <h3>{title}</h3>
      <form onSubmit={handleSubmitBoard}>
        <ModalTitle
          label="Board Name"
          name="boardTitle"
          boardTitle={boardTitle}
          setBoardTitle={setBoardTitle}
        />
        <DynamicList
          title="Board Columns"
          initialValue={initialValue}
          template={template}
          prefix="col"
        />
        <div className={style.buttonForm}>
          {!board && <button type="submit">Create New Board</button>}
          {board && <button type="submit">Save Changes</button>}
        </div>
      </form>
    </div>
  );
}

export default BaseBoard;
