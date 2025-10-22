import style from './App.module.css';

import Logo from './component/Logo/Logo';
import Heading from './component/Heading/Heading';
import Sidebar from './component/Sidebar/Sidebar';
import Board from './component/Board/Board';
import { useState } from 'react';
import Modal from './component/Modal/Modal';
import CreateBoard from './component/Modal/create/Board/CreateBoard';
import CreateTask from './component/Modal/create/Task/CreateTask';

const boards = [
  { id: 'board-101', name: 'Website Launch' },
  { id: 'board-102', name: 'Mobile App Development' },
  { id: 'board-103', name: 'Content Strategy Planning' },
];

function App() {
  const [selectBoard, setSelectBoard] = useState(boards[0]);
  const [isSidebarHide, setIsSidebarHide] = useState(false);
  const [isModal, setIsModal] = useState(false);

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
        <Board isSidebarHide={isSidebarHide} selectBoard={selectBoard} />
      </main>
      <Modal isOpen={isModal} onClose={() => setIsModal(false)}>
        {isModal === 'createBoard' && <CreateBoard />}
        {isModal === 'createTask' && <CreateTask />}
      </Modal>
    </>
  );
}

export default App;
