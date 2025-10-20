import { useState } from 'react';
import iconCross from '../../../../assets/icon-cross.svg';

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
    <>
      <h3>Add new board</h3>
      <form action="/">
        <div>
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
        <div>
          <h3>Board Column</h3>
          {columns.map((column, index) => {
            return (
              <>
                <input
                  key={index}
                  value={column}
                  onChange={(e) => handleChangeColumn(index, e.target.value)}
                />
                <div onClick={() => handleDeleteColumn(index)}>
                  <img src={iconCross} alt="delete button" />
                </div>
              </>
            );
          })}
        </div>
        <button type="button" onClick={handleAddColumn}>
          + add column
        </button>
        <button>Create New Board</button>
      </form>
    </>
  );
}

export default CreateBoard;
