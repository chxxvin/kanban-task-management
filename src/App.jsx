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
import DetailTask from './component/Modal/task/DetailTask';

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

  function handleCreateTask(taskTitle, description, items, currentStatus) {
    const newTask = {
      id: `ts-${crypto.randomUUID()}`,
      title: `${taskTitle}`,
      description: description,
      subtasks: items,
    };

    setData((prevData) =>
      prevData.map((data) => {
        if (data.id !== board.id) return data;

        const updatedColumn = data.columns.map((col) => {
          if (col.name !== currentStatus) return col;

          return {
            ...col,
            tasks: [...col.tasks, newTask],
          };
        });

        return { ...data, columns: updatedColumn };
      })
    );

    setIsModal(false);
  }

  function handleUpdateTask(selectTask, subtasks, currentStatus) {
    setData((prevData) =>
      prevData.map((data) => {
        if (data.id !== board.id) return data;

        const prevStatus = data.columns.find((col) =>
          col.tasks.some((t) => t.id === selectTask.id)
        );

        if (prevStatus.name === currentStatus) {
          return {
            ...data,
            columns: data.columns.map((col) =>
              col.name !== currentStatus
                ? col
                : {
                    ...col,
                    tasks: col.tasks.map((task) =>
                      task.id !== selectTask.id ? task : { ...task, subtasks }
                    ),
                  }
            ),
          };
        }

        return {
          ...data,
          columns: data.columns.map((col) => {
            if (col.name === prevStatus.name) {
              return {
                ...col,
                tasks: col.tasks.filter((task) => task.id !== selectTask.id),
              };
            }

            if (col.name === currentStatus) {
              return {
                ...col,
                tasks: [...col.tasks, { ...selectTask, subtasks }],
              };
            }

            return col;
          }),
        };
      })
    );

    setIsModal(false);
  }

  function handleEditTask(taskTitle, description, items, currentStatus) {
    setData((prevData) =>
      prevData.map((data) => {
        if (data.id !== board.id) return data;

        const prevStatus = data.columns.find((col) =>
          col.tasks.some((t) => t.id === selectTask.id)
        );

        if (prevStatus.name === currentStatus) {
          return {
            ...data,
            columns: data.columns.map((col) =>
              col.name !== currentStatus
                ? col
                : {
                    ...col,
                    tasks: col.tasks.map((task) =>
                      task.id !== selectTask.id
                        ? task
                        : {
                            ...task,
                            title: taskTitle,
                            description: description,
                            subtasks: items,
                          }
                    ),
                  }
            ),
          };
        }

        return {
          ...data,
          columns: data.columns.map((col) => {
            if (col.name === prevStatus.name) {
              return {
                ...col,
                tasks: col.tasks.filter((task) => task.id !== selectTask.id),
              };
            }

            if (col.name === currentStatus) {
              return {
                ...col,
                tasks: [
                  ...col.tasks,
                  {
                    ...selectTask,
                    title: taskTitle,
                    description: description,
                    subtasks: items,
                  },
                ],
              };
            }

            return col;
          }),
        };
      })
    );

    setIsModal(false);
  }

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
          setIsModal={setIsModal}
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
          <BaseTask
            title="Add New Task"
            columns={board.columns}
            handler={handleCreateTask}
            addLabel="Create task"
          />
        )}
        {isModal === 'detailTask' && (
          <DetailTask
            columns={board.columns}
            selectTask={selectTask}
            setIsModal={setIsModal}
            handler={handleUpdateTask}
          />
        )}
        {isModal === 'editTask' && (
          <BaseTask
            title="Edit Task"
            columns={board.columns}
            task={selectTask}
            addLabel="Save changes"
            handler={handleEditTask}
          />
        )}
      </Modal>
    </>
  );
}

export default App;
