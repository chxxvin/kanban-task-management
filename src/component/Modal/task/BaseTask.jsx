import { useState } from 'react';
import ModalTitle from '../components/ModalTitle';
import style from './BaseTask.module.css';
import ModalTextArea from '../components/ModalTextArea';
import DynamicList from '../components/DynamicList';
import ModalSelect from '../components/ModalSelect';
import useDynamicList from '../../../hooks/useDynamicList';

function BaseTask({ columns, task, handler }) {
  const [taskTitle, setTaskTitle] = useState('');
  const [description, setDescription] = useState('');
  const [currentStatus, setCurrentStatus] = useState(() => {
    const column = columns.find((col) =>
      col.tasks.some((t) => t.id === task.id)
    );

    return column ? column.name : columns[0].name;
  });

  const initialValue = task.length
    ? task
    : [
        { id: `st-${crypto.randomUUID()}`, title: '', done: false },
        { id: `st-${crypto.randomUUID()}`, title: '', done: false },
      ];

  const template = { id: '', title: '', done: false };

  const { items, handleAddItem, handleChangeItem, handleDeleteItem } =
    useDynamicList(initialValue);

  function handleSubmit(e) {
    e.preventDefault();
    handler(taskTitle, description, items, currentStatus);
  }

  return (
    <div className={style.baseTask}>
      <h3>Add New Task</h3>
      <form onSubmit={handleSubmit}>
        <ModalTitle
          label="Task Name"
          name="taskTitle"
          modalTitle={taskTitle}
          setModalTitle={setTaskTitle}
        />
        <ModalTextArea
          description={description}
          setDescription={setDescription}
        />
        <DynamicList
          title="Subtasks"
          template={template}
          prefix="st"
          keyTitle="title"
          items={items}
          handleAddItem={handleAddItem}
          handleChangeItem={handleChangeItem}
          handleDeleteItem={handleDeleteItem}
          addLabel="Add New Subtask"
        />
        <ModalSelect
          columns={columns}
          currentStatus={currentStatus}
          setCurrentStatus={setCurrentStatus}
        />
        <button className={style.submitButton} type="submit">
          Create Task
        </button>
      </form>
    </div>
  );
}

export default BaseTask;
