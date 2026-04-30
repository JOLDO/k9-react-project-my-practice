import { useEffect, useRef, useState } from 'react';

const Ex10 = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const inputEl = useRef(null); // DOM 참조용
  const renderCount = useRef(0); // 렌더링 횟수 카운터
  const renderCountForBtn = useRef(0);

  const [count, setCount] = useState(0);

  useEffect(() => {
    renderCount.current += 1; // 렌더링 완료 후 증가
    console.log(`렌더링 횟수: ${renderCount.current}`);
  });

  const onInsert = () => {
    const parsed = parseInt(number, 10);

    if (isNaN(parsed)) {
      inputEl.current?.focus();
      return;
    }

    setList((prevList) => prevList.concat(parsed));
    setNumber('');

    inputEl.current?.focus();
    renderCountForBtn.current += 1;
    console.log('버튼에 의한 렌더링 횟수:', renderCountForBtn.current);
  };

  return (
    <div>
      <input
        ref={inputEl}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="글자 입력"
      />

      <button onClick={onInsert}>추가</button>
      <p>카운트 : {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        증가
      </button>

      <ul>
        {list.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ex10;
