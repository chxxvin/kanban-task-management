import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({ isOpen, onClose, children }) {
  const el = document.createElement('div');

  useEffect(() => {
    if (isOpen) {
      modalRoot.appendChild(el);
    }

    return () => {
      if (modalRoot.contains(el)) {
        modalRoot.removeChild(el);
      }
    };
  }, [isOpen, el]);

  if (!isOpen) return null;

  return createPortal(
    <div className={style.modalOverlay} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    el
  );
}

export default Modal;
