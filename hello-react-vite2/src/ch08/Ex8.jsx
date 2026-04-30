import React, { useCallback, useReducer } from 'react';

function reducer(state, action) {
  // 요청서(action)의 제목(type)이 무엇인지 확인합니다.
  switch (action.type) {
    case 'INCREMENT':
      // "+1 해줘"라는 요청서면, 기존 잔고(state.value)에 1을 더한 새 결과를 반환합니다.
      return { value: state.value + 1 };
    case 'DECREMENT':
      // "-1 해줘"라는 요청서면, 기존 잔고에서 1을 뺀 새 결과를 반환합니다.
      return { value: state.value - 1 };
    case 'RESET':
      return { value: 0 };
    default:
      // 모르는 내용의 요청서가 오면 아무것도 안 하고 기존 잔고를 그대로 돌려줍니다.
      return state;
  }
}

const Ex8 = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  // dispatch는 React가 안정적으로 보장 → deps 빈 배열 OK
  const onIncrement = useCallback(() => {
    dispatch({ type: 'INCREMENT' });
  }, []); // dispatch를 외부변수로 읽지만, React가 항상 같은 참조를 보장

  // dispatch는 React가 안정적으로 보장 → deps 빈 배열 OK
  const onDecrement = useCallback(() => {
    dispatch({ type: 'DECREMENT' });
  }, []); // dispatch를 외부변수로 읽지만, React가 항상 같은 참조를 보장

  // dispatch는 React가 안정적으로 보장 → deps 빈 배열 OK
  const onReset = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []); // dispatch를 외부변수로 읽지만, React가 항상 같은 참조를 보장

  return (
    <div>
      <p>현재값: {state.value}</p>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onDecrement}>-1</button>
      <button onClick={onReset}>초기화</button>
    </div>
  );
};

export default Ex8;
