import { useState, useRef } from 'react';

const Average3 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const inputEl = useRef(null);

  const onInsert = () => {
    const parsed = parseInt(number, 10);

    if (isNaN(parsed)) {
      inputEl.current?.focus();
      return;
    }

    setList((prevList) => prevList.concat(parsed));
    setNumber('');

    inputEl.current?.focus();
  };

  return (
    <div>
      <input
        ref={inputEl}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="숫자 입력"
      />

      <button onClick={onInsert}>추가</button>

      <ul>
        {list.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

export default Average3;
