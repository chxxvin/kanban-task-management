import { useState } from 'react';
import ModalTitle from '../components/ModalTitle';
import style from './BaseTask.module.css';
import ModalTextArea from '../components/ModalTextArea';
import DynamicList from '../components/DynamicList';
import ModalSelect from '../components/ModalSelect';
import useDynamicList from '../../../hooks/useDynamicList';

function BaseTask({ title, columns, task = null, handler, addLabel }) {
  const [taskTitle, setTaskTitle] = useState(task ? task.title : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const [currentStatus, setCurrentStatus] = useState(() => {
    if (!task) return columns[0].name;
    const column = columns.find((col) =>
      col.tasks.some((t) => t.id === task.id)
    );

    return column ? column.name : columns[0].name;
  });

  const initialValue = task
    ? task.subtasks
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
      <h3>{title}</h3>
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
          {addLabel}
        </button>
      </form>
    </div>
  );
}

export default BaseTask;
