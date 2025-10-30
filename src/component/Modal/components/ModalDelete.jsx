import style from './ModalDelete.module.css';

function ModalDelete({ children, setData, setIsModal, handler }) {
  return (
    <div className={style.modalDelete}>
      {children}
      <div className={style.modalDeleteButtons}>
        <button onClick={() => handler(setData, setIsModal)}>Delete</button>
        <button onClick={() => setIsModal(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default ModalDelete;
