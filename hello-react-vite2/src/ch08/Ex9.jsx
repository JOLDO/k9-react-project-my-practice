import React, { useRef, useState } from 'react';

const Ex9 = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const inputEl = useRef(null);

  const onInsert = () => {
    alert(`입력한 텍스트 :${text}`);
    setList((prev) => prev.concat(text));
    setText('');
    inputEl.current?.focus();
  };

  return (
    <div>
      <input
        ref={inputEl}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="글자 입력"
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

export default Ex9;
