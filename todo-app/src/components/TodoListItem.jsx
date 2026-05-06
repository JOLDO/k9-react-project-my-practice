// src/components/TodoListItem.jsx
import {
  MdCheckBoxOutlineBlank, // 미체크 아이콘 □
  MdCheckBox, // 체크 아이콘 ☑
  MdRemoveCircleOutline, // 삭제 아이콘 ⊖
} from "react-icons/md";
import cn from "classnames";
import "./TodoListItem.scss";

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  // const { id, text, checked } = todo; // 구조 분해 할당

  const handleRemove = () => {
    if (window.confirm(`${todo.text}를 정말 삭제할까요?`)) {
      onRemove(todo.id);
    }
  };

  return (
    <div className={cn("TodoListItem", todo.priority)}>
      {/* 체크박스 영역: 클릭 시 토글 */}
      <div
        className={cn("checkbox", { checked: todo.checked })} // checked=true면 'checkbox checked'
        onClick={() => onToggle(todo.id)}
      >
        {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{todo.text}</div>
      </div>

      {/* 삭제 버튼: 클릭 시 삭제 */}
      <div className="remove" onClick={handleRemove}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
