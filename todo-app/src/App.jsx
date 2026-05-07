// src/App.jsx
import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  // ── 상태 선언 ──────────────────────────────────────────
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [
      {
        id: 1,
        text: "리액트의 기초 알아보기",
        checked: true,
        priority: "high",
      },
      {
        id: 2,
        text: "컴포넌트 스타일링해 보기",
        checked: true,
        priority: "medium",
      },
      {
        id: 3,
        text: "일정 관리 앱 만들어 보기",
        checked: false,
        priority: "low",
      },
      {
        id: 4,
        text: "리액트의 기초 알아보기",
        checked: true,
        priority: "high",
      },
      {
        id: 5,
        text: "컴포넌트 스타일링해 보기",
        checked: true,
        priority: "medium",
      },
      {
        id: 6,
        text: "일정 관리 앱 만들어 보기",
        checked: false,
        priority: "low",
      },
      {
        id: 7,
        text: "리액트의 기초 알아보기",
        checked: true,
        priority: "high",
      },
      {
        id: 8,
        text: "컴포넌트 스타일링해 보기",
        checked: true,
        priority: "medium",
      },
      {
        id: 9,
        text: "일정 관리 앱 만들어 보기",
        checked: false,
        priority: "low",
      },
      {
        id: 10,
        text: "리액트의 기초 알아보기",
        checked: true,
        priority: "high",
      },
      {
        id: 11,
        text: "컴포넌트 스타일링해 보기",
        checked: true,
        priority: "medium",
      },
      {
        id: 12,
        text: "일정 관리 앱 만들어 보기",
        checked: false,
        priority: "low",
      },
    ];
  });

  // 다음 id 추적 (useState 아닌 useRef 사용 → 리렌더링 불필요)
  const nextId = useRef(
    todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1,
  );

  // ── 할 일 추가 ─────────────────────────────────────────
  // concat: 기존 배열은 그대로 두고 새 배열을 반환 (불변성 유지)
  const onInsert = useCallback((text, priority = "medium") => {
    if (!text.trim()) {
      alert("빈문자열은 입력 불가입니다.");
      return;
    }
    const todo = {
      id: nextId.current,
      text,
      checked: false,
      priority,
    };
    // 함수형 업데이트: 항상 최신 todos 기준으로 업데이트
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1; // 다음 id 증가
  }, []); // 의존성 없음 → 마운트 시 1회만 생성

  const onUpdate = useCallback((id, newText) => {
    if (!newText.trim()) {
      alert("빈 문자열은 입력 불가입니다.");
      return;
    }

    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  }, []);

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

  const checkedCount = useMemo(
    () => todos.filter((todo) => todo.checked).length,
    [todos],
  );

  const [keyword, setKeyword] = useState("");
  const [cursor, setCursor] = useState(10);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(keyword.toLowerCase()),
    );
  }, [todos, keyword]);

  const visibleTodos = useMemo(() => {
    return filteredTodos.slice(0, cursor);
  }, [filteredTodos, cursor]);

  const hasMore = cursor < filteredTodos.length;

  const onChangeKeyword = useCallback((e) => {
    setKeyword(e.target.value);
    setCursor(10);
  }, []);

  const onLoadMore = useCallback(() => {
    setCursor((prevCursor) => prevCursor + 10);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // ── 렌더링 ────────────────────────────────────────────
  return (
    <TodoTemplate total={todos.length} checked={checkedCount}>
      <TodoInsert onInsert={onInsert} />
      {/* 검색어 입력창 */}
      <input
        value={keyword}
        onChange={onChangeKeyword}
        placeholder="검색어를 입력하세요."
        style={{
          width: "100%",
          padding: "0.6rem",
          fontSize: "1rem",
          boxSizing: "border-box",
        }}
      ></input>
      <TodoList
        todos={visibleTodos}
        onRemove={onRemove}
        onToggle={onToggle}
        onUpdate={onUpdate}
      />
      {hasMore && (
        <button
          onClick={onLoadMore}
          style={{
            width: "100%",
            padding: "0.7rem",
            border: "none",
            background: "#22b8cf",
            color: "white",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          더보기
        </button>
      )}
    </TodoTemplate>
  );
};

export default App;
