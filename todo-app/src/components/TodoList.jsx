// src/components/TodoList.jsx
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

const TodoList = ({ todos, onRemove, onToggle, onUpdate }) => (
  <div className="TodoList">
    {todos.length !== 0 ? (
      todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id} // 리스트 렌더링 시 반드시 고유한 key 필요
          onRemove={onRemove}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      ))
    ) : (
      <p style={{ textAlign: "center", padding: "2rem", color: "red" }}>
        할 일이 없습니다! 🎉
      </p>
    )}
  </div>
);

export default TodoList;
