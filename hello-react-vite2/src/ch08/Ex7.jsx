import React, { useMemo, useState } from 'react';

const Ex7 = () => {
  const [list, setList] = useState([]);
  const [numberTxt, setInputText] = useState('');

  const onInsert = () => {
    const parsed = parseInt(numberTxt, 10);
    if (isNaN(parsed)) return;
    setList(list.concat(parsed));
    setInputText(''); // 입력창 초기화
  };

  const maxValue = useMemo(() => Math.max(...list).toString(), [list]);
  return (
    <div>
      <input
        value={numberTxt}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="숫자 입력 후 추가 클릭"
      />
      <button onClick={onInsert} style={{ padding: '6px 12px' }}>
        추가
      </button>
      <ul>
        {list.length === 0 ? (
          <li>값이 없습니다.</li>
        ) : (
          list.map((val, i) => <li key={i}>{val}</li>)
        )}
      </ul>
      <b>🟢 결과:</b> {list.length === 0 ? '값이 없습니다.' : maxValue}
    </div>
  );
};

export default Ex7;
