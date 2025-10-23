import style from './App.module.css';

import Logo from './component/Logo/Logo';
import Heading from './component/Heading/Heading';
import Sidebar from './component/Sidebar/Sidebar';
import Board from './component/Board/Board';
import { useState } from 'react';
import Modal from './component/Modal/Modal';
import CreateBoard from './component/Modal/create/Board/CreateBoard';
import CreateTask from './component/Modal/create/Task/CreateTask';

import dummy from './data/dummy';

function App() {
  const [boards, setBoards] = useState(dummy);
  const [selectBoard, setSelectBoard] = useState(boards[0]);
  const [isSidebarHide, setIsSidebarHide] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const nameBoards = boards.map((data) => ({
    id: data.id,
    name: data.name,
  }));

  const taskBoards = boards.find((board) => board.id === selectBoard.id);

  return (
    <>
      <header>
        <Logo />
        <Heading selectBoard={selectBoard} setIsModal={setIsModal} />
      </header>
      <main>
        <Sidebar
          boards={nameBoards}
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
          <CreateBoard setBoards={setBoards} setIsModal={setIsModal} />
        )}
        {isModal === 'createTask' && <CreateTask />}
      </Modal>
    </>
  );
}

export default App;
