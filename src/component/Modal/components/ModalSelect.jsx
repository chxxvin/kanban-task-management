import style from './ModalSelect.module.css';

function ModalSelect({ columns }) {
  return (
    <div className={style.modalSelect}>
      <label htmlFor="currentStatus">Current Status</label>
      <select name="currentStatus" id="currentStatus">
        {columns.map((col) => {
          return <option value={col.name}>{col.name}</option>;
        })}
      </select>
    </div>
  );
}

export default ModalSelect;
