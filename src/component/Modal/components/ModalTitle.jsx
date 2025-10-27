import style from './ModalTitle.module.css';

function ModalTitle({ label, name, modalTitle, setModalTitle }) {
  return (
    <div className={style.modalTitle}>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        value={modalTitle}
        onChange={(e) => setModalTitle(e.target.value)}
      />
    </div>
  );
}

export default ModalTitle;
