import style from './App.module.css';

import Logo from './component/Logo/Logo';
import Heading from './component/Heading/Heading';
import Sidebar from './component/Sidebar/Sidebar';
import Board from './component/Board/Board';
import { useMemo, useState } from 'react';
import Modal from './component/Modal/Modal';
import BaseTask from './component/Modal/task/BaseTask';
import BaseBoard from './component/Modal/board/BaseBoard';

import dummy from './data/dummy';
import DeleteBoard from './component/Modal/board/DeleteBoard';
import useBoards from './hooks/useBoards';

function App() {
  const [data, setData] = useState(dummy);
  const [isModal, setIsModal] = useState(false);

  const itemBoards = useMemo(() => {
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
  } = useBoards(itemBoards);

  const board = data.find((board) => board.id === selectBoard.id);
  const [selectTask, setSelectTask] = useState([]);

  return (
    <>
      <header>
        <Logo />
        <Heading selectBoard={selectBoard} setIsModal={setIsModal} />
      </header>
      <main>
        <Sidebar
          itemBoards={itemBoards}
          selectBoard={selectBoard}
          setSelectBoard={setSelectBoard}
          isSidebarHide={isSidebarHide}
          setIsSidebarHide={setIsSidebarHide}
          setIsModal={setIsModal}
        />
        <Board
          isSidebarHide={isSidebarHide}
          board={board}
          setSelectTask={setSelectTask}
        />
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
            board={board}
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
        {isModal === 'createTask' && (
          <BaseTask columns={board.columns} task={selectTask} />
        )}
      </Modal>
    </>
  );
}

export default App;
