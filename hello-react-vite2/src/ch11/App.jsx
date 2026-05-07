// src/App.js
import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  // ── 상태 선언 ──────────────────────────────────────────
  function createBulkTodos() {
    const array = [];
    for (let i = 1; i <= 50000; i++) {
      array.push({ id: i, text: `할 일${i}`, checked: false });
    }
    return array;
  }

  // ✅ 함수 자체를 넘기면 첫 렌더에서만 호출됨
  const [todos, setTodos] = useState(createBulkTodos);

  // 다음 id 추적 (useState 아닌 useRef 사용 → 리렌더링 불필요)
  const nextId = useRef(4);

  // ── 할 일 추가 ─────────────────────────────────────────
  // concat: 기존 배열은 그대로 두고 새 배열을 반환 (불변성 유지)
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // 함수형 업데이트: 항상 최신 todos 기준으로 업데이트
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1; // 다음 id 증가
  }, []); // 의존성 없음 → 마운트 시 1회만 생성

  // ── 할 일 삭제 ─────────────────────────────────────────
  // filter: id가 다른 것만 남기면 해당 id 항목이 제거됨
  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  // ── 완료 토글 ──────────────────────────────────────────
  // map: id가 같은 항목만 checked를 반전, 나머지는 그대로
  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, checked: !todo.checked } // 스프레드로 복사 후 checked만 변경
          : todo,
      ),
    );
  }, []);

  // ── 렌더링 ────────────────────────────────────────────
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
