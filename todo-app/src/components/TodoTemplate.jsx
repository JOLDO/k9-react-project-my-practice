// src/components/TodoTemplate.jsx
import "./TodoTemplate.scss";

const TodoTemplate = ({ children, total, checked }) => (
  <div className="TodoTemplate">
    <div className="app-title">ch10 - 일정관리 앱</div>
    <div className="stats">
      완료 : {checked} / 전체 : {total}
    </div>
    <div className="content">{children}</div>
  </div>
);

export default TodoTemplate;
