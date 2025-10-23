import { useState } from 'react';
import iconCross from '../../../../assets/icon-cross.svg';
import style from './CreateBoard.module.css';

function CreateBoard({ setBoards, setIsModal }) {
  const [boardName, setBoardName] = useState('');
  const [columns, setColumns] = useState([
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
  ]);

  function handleAddColumn() {
    setColumns((prevCol) => [
      ...prevCol,
      {
        id: `col-${crypto.randomUUID()}`,
        name: '',
        tasks: [],
      },
    ]);
  }

  function handleChangeColumn(selectColumnId, value) {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.id === selectColumnId ? { ...col, name: value } : col
      )
    );
  }

  function handleDeleteColumn(index) {
    setColumns((prevColumns) => prevColumns.filter((_, i) => i !== index));
  }

  function handleSubmitBoard(e) {
    e.preventDefault();
    const newBoard = {
      id: `board-${crypto.randomUUID()}`,
      name: boardName,
      columns,
    };
    setIsModal(false);
    setBoards((prevBoards) => [...prevBoards, newBoard]);
  }

  return (
    <div>
      <h3>Add new board</h3>
      <form onSubmit={handleSubmitBoard}>
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
                    value={column.name}
                    onChange={(e) =>
                      handleChangeColumn(column.id, e.target.value)
                    }
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
          <button type="submit">Create New Board</button>
        </div>
      </form>
    </div>
  );
}

export default CreateBoard;
