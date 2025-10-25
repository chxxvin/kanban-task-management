import style from './Task.module.css';

function Task({ task, handler }) {
  const subtaskDone = task.subtasks.filter(
    (subtask) => subtask.done === true
  ).length;

  return (
    <div className={style.task} onClick={handler}>
      <h3 className={style.titleTask}>{task.title}</h3>
      <p className={style.subtask}>
        {subtaskDone} of {task.subtasks.length} subtasks
      </p>
    </div>
  );
}

export default Task;
