import style from './DeleteBoard.module.css';

function DeleteBoard({ boardName, setData, setIsModal, handler }) {
  return (
    <div className={style.deleteBoard}>
      <h3>Delete this board?</h3>
      <p>
        Are you sure you want to delete the "{boardName}" board? This action
        will remove all columns and tasks and cannot be reversed.
      </p>
      <div className={style.deleteBoardButtons}>
        <button onClick={() => handler(setData, setIsModal)}>Delete</button>
        <button onClick={() => setIsModal(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default DeleteBoard;
