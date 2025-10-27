import { useState } from 'react';

function useDynamicList(initialValue) {
  const [items, setItems] = useState(initialValue);

  function handleAddItem(prefix, template) {
    setItems((prevItems) => [
      ...prevItems,
      {
        ...template,
        id: `${prefix}-${crypto.randomUUID()}`,
      },
    ]);
  }

  function handleChangeItem(id, key, value) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, [key]: value } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  return {
    items,
    handleAddItem,
    handleChangeItem,
    handleDeleteItem,
  };
}

export default useDynamicList;
