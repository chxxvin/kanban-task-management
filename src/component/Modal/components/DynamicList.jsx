import style from './DynamicList.module.css';
import iconCross from '../../../assets/icon-cross.svg';
import useDynamicList from '../../../hooks/useDynamicList';

function DynamicList({ title = null, initialValue, template, prefix }) {
  const { items, handleAddItem, handleChangeItem, handleDeleteItem } =
    useDynamicList(initialValue);

  return (
    <div className={style.columnContainer}>
      <h3>{title}</h3>
      <div>
        {items.map((item, index) => {
          return (
            <div className={style.modalColumn} key={index}>
              <input
                value={item.name}
                onChange={(e) => handleChangeItem(item.id, e.target.value)}
                placeholder="e.g Done"
              />
              <button type="button" onClick={() => handleDeleteItem(index)}>
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
          {title === 'Subtasks' ? '+ Add New Subtask' : '+ Add New Column'}
        </button>
      </div>
    </div>
  );
}

export default DynamicList;
