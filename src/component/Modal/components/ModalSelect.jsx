import style from './ModalSelect.module.css';

function ModalSelect({ columns, currentStatus, setCurrentStatus }) {
  console.log(currentStatus);

  return (
    <div className={style.modalSelect}>
      <label htmlFor="currentStatus">Current Status</label>
      <select
        name="currentStatus"
        id="currentStatus"
        value={currentStatus}
        onChange={(e) => setCurrentStatus(e.target.value)}
      >
        {columns.map((col) => {
          return (
            <option key={col.id} value={col.name}>
              {col.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default ModalSelect;
