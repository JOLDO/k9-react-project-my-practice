import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(
    () => {
      try {
      const item = localStorage.getItem(key); 
      return item ? JSON.parse(item) : initialValue;
      } catch {
        return initialValue;
      }
    }
  );

  //그냥 체인지 함수 만들어서 해도 됨
  const onChange = (e) => {
    const value = e.target.value;
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  const setValue = (value) => {
    try {
      setStoredValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch(error) {
      console.error(error);
    }
  }

  return [storedValue, setValue];
}

export default useLocalStorage;
