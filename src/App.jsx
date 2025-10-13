import style from './App.module.css';

import Logo from './component/Logo/Logo';
import Heading from './component/Heading/Heading';
import Sidebar from './component/Sidebar/Sidebar';
import Board from './component/Board/Board';
import { useState } from 'react';

function App() {
  const boards = ['Platform Launch', 'Marketing Plan', 'Roadmap'];
  const [selectBoard, setSelectBoard] = useState(boards[0]);
  const [isSidebarHide, setIsSidebarHide] = useState(false);

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
        />
        <Board isSidebarHide={isSidebarHide} />
      </main>
    </>
  );
}

export default App;
