import style from './App.module.css';

import Logo from './component/Logo/Logo';
import Heading from './component/Heading/Heading';
import Sidebar from './component/Sidebar/Sidebar';
import Board from './component/Board/Board';
import { useState } from 'react';

function App() {
  const boards = ['Platform Launch', 'Marketing Plan', 'Roadmap'];
  const [selectBoard, setSelectBoard] = useState(boards[0]);

  return (
    <>
      <header>
        <Logo />
        <Heading selectBoard={selectBoard} />
      </header>
      <main>
        <Sidebar boards={boards} selectBoard={selectBoard} />
        <Board />
      </main>
    </>
  );
}

export default App;
