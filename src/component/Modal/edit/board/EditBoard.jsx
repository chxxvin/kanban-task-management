import { useState } from 'react';
import style from './EditBoard.module.css';
import iconCross from '../../../../assets/icon-cross.svg';

function EditBoard({ setBoards, setIsModal, taskBoards }) {
  const [boardName, setBoardName] = useState(taskBoards.name);
  const [columns, setColumns] = useState(taskBoards.columns);

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
    const updateBoard = {
      id: `${taskBoards.id}`,
      name: boardName,
      columns,
    };
    setIsModal(false);
    setBoards((prevBoards) =>
      prevBoards.map((board) =>
        board.id === taskBoards.id ? updateBoard : board
      )
    );
  }

  return (
    <div>
      <h3>Edit board</h3>
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
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  );
}

export default EditBoard;
