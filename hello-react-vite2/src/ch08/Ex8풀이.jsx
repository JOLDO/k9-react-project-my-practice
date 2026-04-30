import { useState, useCallback, useEffect } from 'react';

// ===============================
// 1. useCallback 사용 전
// ===============================
const CounterBefore = () => {
  console.log('Before 컴포넌트 렌더링');

  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    console.log('Before handleIncrease 실행');
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    console.log('Before handleDecrease 실행');
    setCount((prev) => prev - 1);
  };

  const handleReset = () => {
    console.log('Before handleReset 실행');
    setCount(0);
  };

  useEffect(() => {
    console.log('Before handleIncrease 함수 생성됨');
  }, [handleIncrease]);

  useEffect(() => {
    console.log('Before handleDecrease 함수 생성됨');
  }, [handleDecrease]);

  useEffect(() => {
    console.log('Before handleReset 함수 생성됨');
  }, [handleReset]);

  return (
    <div style={{ border: '1px solid gray', padding: 16, marginBottom: 20 }}>
      <h2>useCallback 사용 전</h2>

      <p>
        카운트: <b>{count}</b>
      </p>

      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleReset}>초기화</button>
    </div>
  );
};

// ===============================
// 2. useCallback 사용 후
// ===============================
const CounterAfter = () => {
  console.log('After 컴포넌트 렌더링');

  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    console.log('After handleIncrease 실행');
    setCount((prev) => prev + 1);
  }, []);

  const handleDecrease = useCallback(() => {
    console.log('After handleDecrease 실행');
    setCount((prev) => prev - 1);
  }, []);

  const handleReset = useCallback(() => {
    console.log('After handleReset 실행');
    setCount(0);
  }, []);

  useEffect(() => {
    console.log('After handleIncrease 함수 생성됨');
  }, [handleIncrease]);

  useEffect(() => {
    console.log('After handleDecrease 함수 생성됨');
  }, [handleDecrease]);

  useEffect(() => {
    console.log('After handleReset 함수 생성됨');
  }, [handleReset]);

  return (
    <div style={{ border: '1px solid gray', padding: 16 }}>
      <h2>useCallback 사용 후</h2>

      <p>
        카운트: <b>{count}</b>
      </p>

      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleReset}>초기화</button>
    </div>
  );
};

// ===============================
// 3. 비교용 컴포넌트
// ===============================
const CallbackCounterCompare = () => {
  return (
    <div>
      <h1>useCallback 전 / 후 비교</h1>

      <CounterBefore />
      <CounterAfter />
    </div>
  );
};

export default CallbackCounterCompare;
