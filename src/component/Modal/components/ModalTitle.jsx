import style from './ModalTitle.module.css';

function ModalTitle({ label, name, boardTitle, setBoardTitle }) {
  return (
    <div className={style.modalTitle}>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        value={boardTitle}
        onChange={(e) => setBoardTitle(e.target.value)}
        placeholder="e.g Web Design"
      />
    </div>
  );
}

export default ModalTitle;
