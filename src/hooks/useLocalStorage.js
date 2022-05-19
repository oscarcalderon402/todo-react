import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  const [item, setItem] = React.useState([]);
  React.useEffect(() => {
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      setItem(initialValue);
    } else {
      setItem(JSON.parse(localStorageItem));
    }
  });

  const saveItem = (newItem) => {
    const newState = [...item, ...newItem];
    const stringifiedItem = JSON.stringify(newState);
    localStorage.setItem(itemName, stringifiedItem);

    setItem(newState);
  };

  return [item, saveItem];
}

export default useLocalStorage;
