import { useState } from 'react';
import style from './BaseBoard.module.css';
import ModalTitle from '../components/ModalTitle';
import DynamicList from '../components/DynamicList';
import useDynamicList from '../../../hooks/useDynamicList';

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

  const { items, handleAddItem, handleChangeItem, handleDeleteItem } =
    useDynamicList(initialValue);

  const template = {
    id: '',
    name: '',
    tasks: [],
  };

  function handleSubmitBoard(e) {
    e.preventDefault();
    handler(boardTitle, items, setData, setIsModal);
  }

  return (
    <div>
      <h3>{title}</h3>
      <form onSubmit={handleSubmitBoard}>
        <ModalTitle
          label="Board Name"
          name="boardTitle"
          modalTitle={boardTitle}
          setModalTitle={setBoardTitle}
        />
        <DynamicList
          title="Board Columns"
          template={template}
          prefix="col"
          keyTitle="name"
          items={items}
          handleAddItem={handleAddItem}
          handleChangeItem={handleChangeItem}
          handleDeleteItem={handleDeleteItem}
          addLabel="Add New Column"
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
