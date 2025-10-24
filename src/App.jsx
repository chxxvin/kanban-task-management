import style from './App.module.css';

import Logo from './component/Logo/Logo';
import Heading from './component/Heading/Heading';
import Sidebar from './component/Sidebar/Sidebar';
import Board from './component/Board/Board';
import { useMemo, useState } from 'react';
import Modal from './component/Modal/Modal';
import CreateTask from './component/Modal/create/Task/CreateTask';
import BaseBoard from './component/Modal/board/BaseBoard';

import dummy from './data/dummy';
import DeleteBoard from './component/Modal/board/DeleteBoard';
import useBoards from './hooks/useBoards';

function App() {
  const [data, setData] = useState(dummy);
  const [isModal, setIsModal] = useState(false);

  const boards = useMemo(() => {
    return data.map((d) => ({
      id: d.id,
      name: d.name,
    }));
  }, [data]);

  const {
    selectBoard,
    setSelectBoard,
    isSidebarHide,
    setIsSidebarHide,
    handleCreateBoard,
    handleEditBoard,
    handleDeleteBoard,
  } = useBoards(boards);

  const taskBoards = data.find((board) => board.id === selectBoard.id);

  return (
    <>
      <header>
        <Logo />
        <Heading selectBoard={selectBoard} setIsModal={setIsModal} />
      </header>
      <main>
        <Sidebar
          boards={boards}
          selectBoard={selectBoard}
          setSelectBoard={setSelectBoard}
          isSidebarHide={isSidebarHide}
          setIsSidebarHide={setIsSidebarHide}
          setIsModal={setIsModal}
        />
        <Board isSidebarHide={isSidebarHide} taskBoards={taskBoards} />
      </main>
      <Modal isOpen={isModal} onClose={() => setIsModal(false)}>
        {isModal === 'createBoard' && (
          <BaseBoard
            title="Add new board"
            setData={setData}
            setIsModal={setIsModal}
            handler={handleCreateBoard}
          />
        )}
        {isModal === 'editBoard' && (
          <BaseBoard
            title="Edit board"
            taskBoards={taskBoards}
            setData={setData}
            setIsModal={setIsModal}
            handler={handleEditBoard}
          />
        )}
        {isModal === 'deleteBoard' && (
          <DeleteBoard
            boardName={selectBoard.name}
            setIsModal={setIsModal}
            setData={setData}
            handler={handleDeleteBoard}
          />
        )}
        {isModal === 'createTask' && <CreateTask />}
      </Modal>
    </>
  );
}

export default App;
