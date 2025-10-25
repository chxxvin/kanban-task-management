import { useState } from 'react';
import style from './ModalTextArea.module.css';

function ModalTextArea() {
  const [value, setValue] = useState('');

  return (
    <div className={style.modalTextArea}>
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default ModalTextArea;
