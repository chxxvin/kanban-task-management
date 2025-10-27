import style from './DynamicList.module.css';
import iconCross from '../../../assets/icon-cross.svg';

function DynamicList({
  title = null,
  template,
  prefix,
  keyTitle,
  items,
  handleAddItem,
  handleChangeItem,
  handleDeleteItem,
  addLabel,
}) {
  return (
    <div className={style.columnContainer}>
      <h3>{title}</h3>
      <div>
        {items.map((item) => {
          return (
            <div className={style.modalColumn} key={item.id}>
              <input
                value={item[keyTitle]}
                onChange={(e) =>
                  handleChangeItem(item.id, keyTitle, e.target.value)
                }
              />
              <button type="button" onClick={() => handleDeleteItem(item.id)}>
                <img src={iconCross} alt="delete button" />
              </button>
            </div>
          );
        })}
        <button
          type="button"
          onClick={() => handleAddItem(prefix, template)}
          className={style.addItem}
        >
          + {addLabel}
        </button>
      </div>
    </div>
  );
}

export default DynamicList;
