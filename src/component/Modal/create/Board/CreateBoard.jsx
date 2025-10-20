import { useState } from 'react';
import iconCross from '../../../../assets/icon-cross.svg';
import style from './CreateBoard.module.css';

function CreateBoard() {
  const [boardName, setBoardName] = useState('');
  const [columns, setColumns] = useState(['Todo', 'Doing']);

  function handleAddColumn() {
    setColumns((prevCol) => [...prevCol, '']);
  }

  function handleChangeColumn(index, value) {
    setColumns((prevColumns) =>
      prevColumns.map((col, i) => (i === index ? value : col))
    );
  }

  function handleDeleteColumn(index) {
    setColumns((prevColumns) => prevColumns.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h3>Add new board</h3>
      <form action="/">
        <div className={style.boardName}>
          <label htmlFor="board-name">Board Name</label>
          <input
            type="text"
            name=""
            id="board-name"
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
            placeholder="e.g Web Design"
          />
        </div>
        <div className={style.columnContainer}>
          <h3>Board Columns</h3>
          <div>
            {columns.map((column, index) => {
              return (
                <div className={style.modalColumn} key={index}>
                  <input
                    value={column}
                    onChange={(e) => handleChangeColumn(index, e.target.value)}
                    placeholder="e.g Done"
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteColumn(index)}
                  >
                    <img src={iconCross} alt="delete button" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className={style.buttonForm}>
          <button type="button" onClick={handleAddColumn}>
            + Add New Column
          </button>
          <button>Create New Board</button>
        </div>
      </form>
    </div>
  );
}

export default CreateBoard;
