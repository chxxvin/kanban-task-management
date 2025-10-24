import { useEffect, useState } from 'react';

function useBoards(boardName) {
  const boards = boardName;
  const [selectBoard, setSelectBoard] = useState(boards[0]);
  const [isSidebarHide, setIsSidebarHide] = useState(false);

  function handleCreateBoard(boardName, columns, setData, setIsModal) {
    const newBoard = {
      id: `board-${crypto.randomUUID()}`,
      name: boardName,
      columns,
    };
    setIsModal(false);
    setData((prevBoards) => [...prevBoards, newBoard]);
  }

  useEffect(() => {
    setSelectBoard((prev) => boards.find((board) => board.id === prev.id));
  }, [boards]);

  function handleEditBoard(boardName, columns, setData, setIsModal) {
    const updateBoard = {
      id: `${selectBoard.id}`,
      name: boardName,
      columns,
    };
    setIsModal(false);
    setData((prevBoards) =>
      prevBoards.map((board) =>
        board.id === selectBoard.id ? updateBoard : board
      )
    );
  }

  function handleDeleteBoard(setData, setIsModal) {
    setData((prevBoards) =>
      prevBoards.filter((board) => board.id !== selectBoard.id)
    );
    setSelectBoard(boards[0]);
    setIsModal(false);
  }

  return {
    selectBoard,
    setSelectBoard,
    isSidebarHide,
    setIsSidebarHide,
    handleCreateBoard,
    handleEditBoard,
    handleDeleteBoard,
  };
}

export default useBoards;
