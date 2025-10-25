import { useState } from 'react';
import ModalTitle from '../components/ModalTitle';
import style from './BaseTask.module.css';
import ModalTextArea from '../components/ModalTextArea';
import DynamicList from '../components/DynamicList';
import ModalSelect from '../components/ModalSelect';

function BaseTask({ columns, task }) {
  const initialValue = task.length
    ? task
    : [
        { id: `st-${crypto.randomUUID()}`, title: '', done: false },
        { id: `st-${crypto.randomUUID()}`, title: '', done: false },
      ];

  const template = { id: '', title: '', done: false };

  const [boardTitle, setBoardTitle] = useState('');

  return (
    <div className={style.baseTask}>
      <h3>Add New Task</h3>
      <form>
        <ModalTitle
          label="Task Name"
          name="boardTitle"
          boardTitle={boardTitle}
          setBoardTitle={setBoardTitle}
        />
        <ModalTextArea />
        <DynamicList
          title="Subtasks"
          initialValue={initialValue}
          template={template}
          prefix="st"
        />
        <ModalSelect columns={columns} />
        <button className={style.submitButton} type="submit">
          Create Task
        </button>
      </form>
    </div>
  );
}

export default BaseTask;
