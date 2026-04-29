import React, { useState } from 'react';

const Ex1 = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => setValue(value + 2)}>+2</button>
      <button onClick={() => setValue(value - 2)}>-2</button>
      <button onClick={() => setValue(0)}>초기화</button>
    </div>
  );
};

export default Ex1;
