// src/components/TodoTemplate.jsx
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => (
  <div className="TodoTemplate">
    <div className="app-title">ch10 - 일정관리 앱</div>
    <div className="content">{children}</div>
  </div>
);

export default TodoTemplate;
