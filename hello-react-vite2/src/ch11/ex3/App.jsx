import React, { useMemo, useState } from 'react';

// TODO: 이 컴포넌트에 memo를 적용하세요

// const Child = React.memo(function Child({ name }) {
//   console.log('[Child] 렌더됨 — name:', name);
//   return (
//     <div style={{ padding: 12, border: '1px solid #ccc' }}>자식: {name}</div>
//   );
// });

function ChildComponent({ name, score }) {
  console.log('Child 렌더 — name:', name, 'score:', score);
  return (
    <div
      style={{
        marginTop: 12,
        padding: 12,
        border: '1px solid #dee2e6',
        borderRadius: 8,
      }}
    >
      <p>이름: {name}</p>
      <p>점수: {score}</p>
    </div>
  );
}

const Child = React.memo(ChildComponent, (prev, next) => {
  return prev.score === next.score; //몇몇의 조건만 맞추면 될때
});

// const Child = React.memo(ChildComponent);   //무조건 전체 다 확인해야 할때(아무것도 안주면 얕은비교해줌)

export default function App() {
  const [parentCount, setParentCount] = useState(0);
  const [childScore, setChildScore] = useState(100);

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui' }}>
      <h1>Q3 — memo 적용</h1>
      <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <button type="button" onClick={() => setParentCount((c) => c + 1)}>
          부모만 리렌더 ({parentCount})
        </button>
        <button type="button" onClick={() => setChildScore((s) => s + 10)}>
          자식 점수 변경 ({childScore})
        </button>
      </div>
      <Child name="김철수" score={childScore} />
    </div>
  );
}
