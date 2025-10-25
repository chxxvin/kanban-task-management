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

  function handleDeleteItem(index) {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  }

  return {
    items,
    handleAddItem,
    handleChangeItem,
    handleDeleteItem,
  };
}

export default useDynamicList;
