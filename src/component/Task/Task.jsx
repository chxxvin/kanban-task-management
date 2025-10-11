import style from './Task.module.css';

function Task({ task }) {
  return (
    <div className={style.task}>
      <h3 className={style.titleTask}>{task.title}</h3>
      <p className={style.subtask}>
        {task.subtasks_done} of {task.subtasks_total} subtasks
      </p>
    </div>
  );
}

export default Task;
