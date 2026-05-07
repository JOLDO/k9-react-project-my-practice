import { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 공부하기', checked: false },
    { id: 2, text: '운동하기', checked: false },
    { id: 3, text: '독서하기', checked: false },
  ]);

  const toggleFirst = () => {
    // 🐛 버그: 직접 변이(mutate)하고 같은 배열 참조를 넘김
    // todos[0].checked = !todos[0].checked;

    setTodos(
      todos.map((todo, i) => {
        return i === 0 ? { ...todo, checked: !todo.checked } : todo;
      }),
    );
  };

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui' }}>
      <h1>Q5 — 불변성 버그</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((t) => (
          <li
            key={t.id}
            style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}
          >
            <span style={{ marginRight: 8 }}>{t.checked ? '✅' : '⬜'}</span>
            {t.text}
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={toggleFirst}
        style={{ marginTop: 12, padding: '8px 16px' }}
      >
        첫 할 일 토글
      </button>
    </div>
  );
}
