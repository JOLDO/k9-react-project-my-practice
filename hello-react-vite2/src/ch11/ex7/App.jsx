import { memo, useCallback, useReducer, useState } from 'react';
import { List } from 'react-virtualized';
import 'react-virtualized/styles.css';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i += 1) {
    array.push({ id: i, text: `할 일${i}`, checked: false });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    default:
      return todos;
  }
}

const TodoItem = memo(function TodoItem({ todo, onToggle, onRemove, style }) {
  return (
    // TODO 1: react-virtualized가 전달하는 style prop을 최상위 div에 반드시 적용하세요
    <div style={style}>
      <div
        style={{
          display: 'flex',
          gap: 8,
          alignItems: 'center',
          padding: '8px 12px',
          height: 57,
        }}
      >
        <button type="button" onClick={() => onToggle(todo.id)}>
          {todo.checked ? '✅' : '⬜'}
        </button>
        <span style={{ flex: 1 }}>{todo.text}</span>
        <button type="button" onClick={() => onRemove(todo.id)}>
          🗑
        </button>
      </div>
    </div>
  );
});

const TodoList = memo(function TodoList({ todos, onToggle, onRemove }) {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoItem
          key={key}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
          style={style}
        />
      );
    },
    // TODO 2: 의존성 배열을 올바르게 채우세요
    [todos, onToggle, onRemove],
  );

  return (
    <List
      width={500}
      height={400}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      style={{ outline: 'none', border: '1px solid #dee2e6', borderRadius: 8 }}
    />
  );
});

export default function App() {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos); //리듀서함수, 초기화할 함수의 인자값(지금은 createBulkTodos의 인자값을 안받아서 undefined(그냥 이걸로 씀 왠만하면)로 써줌), 첫 렌더시 한번만 초기화할 함수
  //   const [todo, setTodo] = useState(createBulkTodos);    //첫 렌더시에만 초기화 하려면(초기화 함수 인자값을 받지 않을때)
  //   const [todo, setTodo] = useState(createBulkTodos());    //매 렌더시에 초기화 하려면(초기화 함수 인자값을 받지 않을때)
  //   const [todo, setTodo] = useState(() => createBulkTodos(2500));    //첫 렌더시에만 초기화 하려면(초기화 함수 인자값을 받을때)
  //   const [todo, setTodo] = useState(createBulkTodos(2500));    //매 렌더시에 초기화 하려면(초기화 함수 인자값을 받을때)

  // TODO 8: useCallback으로 감싸고 의존성 배열을 채우세요
  const onToggle = useCallback((id) => dispatch({ type: 'TOGGLE', id }), []); //dispatch나 useState의 setter는 []을 쓰면 된다.
  const onRemove = useCallback((id) => dispatch({ type: 'REMOVE', id }), []);

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui' }}>
      <h1>Q7 — react-virtualized 완성</h1>
      <p style={{ color: '#868e96', marginBottom: 16 }}>
        전체 {todos.length}개 항목
      </p>
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </div>
  );
}
