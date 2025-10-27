import style from './ModalTextArea.module.css';

function ModalTextArea({ description, setDescription }) {
  return (
    <div className={style.modalTextArea}>
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
}

export default ModalTextArea;
