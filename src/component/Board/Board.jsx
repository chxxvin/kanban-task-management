import Task from '../Task/Task';
import style from './Board.module.css';

const boards = {
  Todo: [
    {
      title: 'Plan new marketing website',
      subtasks_done: 1,
      subtasks_total: 4,
    },
    {
      title: 'Design pricing comparison page',
      subtasks_done: 0,
      subtasks_total: 3,
    },
    {
      title: 'Set up email automation workflow',
      subtasks_done: 0,
      subtasks_total: 2,
    },
    {
      title: 'Define product roadmap Q1',
      subtasks_done: 0,
      subtasks_total: 3,
    },
  ],
  Doing: [
    {
      title: 'Update dashboard analytics',
      subtasks_done: 2,
      subtasks_total: 4,
    },
    {
      title: 'Develop profile customization settings',
      subtasks_done: 1,
      subtasks_total: 3,
    },
    {
      title: 'Integrate Stripe subscription',
      subtasks_done: 2,
      subtasks_total: 3,
    },
    {
      title: 'Write API integration tests',
      subtasks_done: 1,
      subtasks_total: 2,
    },
    {
      title: 'Redesign onboarding flow',
      subtasks_done: 2,
      subtasks_total: 3,
    },
    {
      title: 'Benchmark competitor pricing',
      subtasks_done: 1,
      subtasks_total: 3,
    },
  ],
  Done: [
    {
      title: 'Run 10 user interviews',
      subtasks_done: 2,
      subtasks_total: 2,
    },
    {
      title: 'Create high-fidelity mockups',
      subtasks_done: 3,
      subtasks_total: 3,
    },
    {
      title: 'Refactor login component',
      subtasks_done: 1,
      subtasks_total: 1,
    },
    {
      title: 'Conduct accessibility audit',
      subtasks_done: 2,
      subtasks_total: 2,
    },
    {
      title: 'Prepare internal documentation',
      subtasks_done: 3,
      subtasks_total: 3,
    },
    {
      title: 'Optimize database queries',
      subtasks_done: 1,
      subtasks_total: 1,
    },
    {
      title: 'Publish v1.0 release notes',
      subtasks_done: 1,
      subtasks_total: 1,
    },
  ],
};

function Board() {
  return (
    <div className={style.board}>
      {Object.entries(boards).map(([columnName, tasks], index) => {
        return (
          <div className={style.column} key={index}>
            <h3 className={style.columnName}>
              {columnName} ({tasks.length})
            </h3>
            {tasks.map((task, index) => (
              <Task task={task} key={index} />
            ))}
          </div>
        );
      })}
      <div className={style.addColumn}>+ New Column</div>
    </div>
  );
}

export default Board;
