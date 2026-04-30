import React from 'react';
import useLocalStorage from './useLocalStorage';

const Ex12 = () => {
  const [name, setName] = useLocalStorage('name', '');

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름을 입력하세요"
      />
      <p>저장된 이름: {name}</p>
    </div>
  );
};

export default Ex12;
