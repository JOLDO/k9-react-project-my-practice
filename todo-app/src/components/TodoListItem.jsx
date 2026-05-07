// src/components/TodoListItem.jsx
import {
  MdCheckBoxOutlineBlank, // 미체크 아이콘 □
  MdCheckBox, // 체크 아이콘 ☑
  MdRemoveCircleOutline, // 삭제 아이콘 ⊖
} from "react-icons/md";
import cn from "classnames";
import { AiFillEdit } from "react-icons/ai";
import { FcCancel } from "react-icons/fc";
import "./TodoListItem.scss";
import { useState } from "react";

const priorityColor = {
  high: "#ff6b6b",
  medium: "#fcc419",
  low: "#51cf66",
};

const TodoListItem = ({ todo, onRemove, onToggle, onUpdate }) => {
  // const { id, text, checked } = todo; // 구조 분해 할당
  const { priority } = todo;

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    onUpdate(todo.id, editText);
    setIsEditing(false);
  };

  const handleRemove = () => {
    if (window.confirm(`${todo.text}를 정말 삭제할까요?`)) {
      onRemove(todo.id);
    }
  };

  return (
    <div>
      {isEditing ? (
        // 수정 입력창
        <div
          className="TodoListItem"
          style={{ borderLeft: `4px solid ${priorityColor[priority]}` }}
        >
          {/* 체크박스 영역: 클릭 시 토글 */}
          <div className="edit">
            <input
              className="edit-input"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            ></input>

            {/* 수정 버튼: 클릭 시 수정 */}
            <div className="update" onClick={handleUpdate}>
              <AiFillEdit />
            </div>

            {/* 취소 버튼: 클릭 시 수정취소 */}
            <div className="remove" onClick={() => setIsEditing(false)}>
              <FcCancel />
            </div>
          </div>
        </div>
      ) : (
        //수정 아닐때
        <div
          className="TodoListItem"
          style={{ borderLeft: `4px solid ${priorityColor[priority]}` }}
        >
          {/* 체크박스 영역: 클릭 시 토글 */}
          <div
            className={cn("checkbox", { checked: todo.checked })} // checked=true면 'checkbox checked'
            onClick={() => onToggle(todo.id)}
          >
            {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{todo.text}</div>
          </div>

          {/* 수정 버튼: 클릭 시 수정 */}
          <div className="update" onClick={() => setIsEditing(true)}>
            <AiFillEdit />
          </div>

          {/* 삭제 버튼: 클릭 시 삭제 */}
          <div className="remove" onClick={handleRemove}>
            <MdRemoveCircleOutline />
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoListItem;
