import style from './App.module.css';

import Logo from './component/Logo/Logo';
import Heading from './component/Heading/Heading';
import Sidebar from './component/Sidebar/Sidebar';
import Board from './component/Board/Board';
import { useState } from 'react';
import Modal from './component/Modal/Modal';

function App() {
  const boards = ['Platform Launch', 'Marketing Plan', 'Roadmap'];
  const [selectBoard, setSelectBoard] = useState(boards[0]);
  const [isSidebarHide, setIsSidebarHide] = useState(false);
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <header>
        <Logo />
        <Heading selectBoard={selectBoard} />
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
        <Board isSidebarHide={isSidebarHide} />
      </main>
      <Modal isOpen={isModal} onClose={() => setIsModal(false)}>
        <h2>Halo Dunia!</h2>
        <p>Ini adalah konten di dalam modal.</p>
        <button onClick={() => setIsModal(false)}>Tutup</button>
      </Modal>
    </>
  );
}

export default App;
