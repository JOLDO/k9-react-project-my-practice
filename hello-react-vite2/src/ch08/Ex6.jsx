import React, { useState, useReducer } from 'react';

const initialState = {
  names: [
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ],
  inputText: '',
  nextId: 5,
  deletedItems: [],
  sortFlag: true,
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return { ...state, inputText: action.payload };
    case 'SORT_ITEM':
      return { ...state, sortFlag: action.flag };
    case 'ADD_ITEM':
      return {
        ...state,
        names: state.names.concat({ id: state.nextId, text: state.inputText }),
        nextId: state.nextId + 1,
        inputText: '',
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        names: state.names.filter((name) => name.id !== action.payload.id),
        deletedItems: action.flag
          ? [...state.deletedItems]
          : [...state.deletedItems, action.payload],
      };
    case 'UPDATE_ITEM':
      return {
        ...state,
        names: state.names.map((name) =>
          name.id === action.payload.id
            ? { ...name, text: action.payload.newText }
            : name,
        ),
      };
    case 'RESTORE_ITEM':
      return {
        ...state,
        names: action.flag
          ? [...state.names]
          : [...state.names, action.payload],
        deletedItems: state.deletedItems.filter(
          (name) => name.id !== action.payload.id,
        ),
      };
  }
}

const Ex6 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { names, inputText, deletedItems, sortFlag } = state;

  const onChange = (e) => {
    dispatch({ type: 'CHANGE_INPUT', payload: e.target.value });
  };

  const onSort = () => {
    dispatch({ type: 'SORT_ITEM', flag: !sortFlag });
  };

  const onClick = () => {
    if (!inputText.trim()) {
      alert('공백은 입력할 수 없습니다.');
      return;
    }

    if (names.some((name) => name.text === inputText)) {
      alert('이미 존재하는 항목입니다.');
      dispatch({ type: 'CHANGE_INPUT', payload: '' });
      return;
    }

    dispatch({ type: 'ADD_ITEM' });
  };

  const onRemove = (id) => {
    let flag = false;
    const deletedItem = names.find((name) => name.id === id);

    if (confirm(`${deletedItem.text}를 삭제하시겠습니까?`)) {
      if (deletedItems.some((name) => name.text === deletedItem.text)) {
        alert('이미 존재하는 항목입니다.');
        //지우기 현재 항목에서
        flag = true;
      }
      dispatch({
        type: 'REMOVE_ITEM',
        payload: deletedItem,
        flag: flag,
      });
      alert(`삭제한 요소는 ${deletedItem.text}입니다.`);
    }
  };

  const onRightClick = (e, id, text) => {
    e.preventDefault(); //브라우저에서 기본 우클릭 메뉴 방지
    const newText = prompt('수정할 내용을 입력하세요.', text);
    if (newText && newText.trim()) {
      if (names.some((name) => name.text === newText)) {
        alert('이미 존재하는 항목입니다.');
        return;
      }
      dispatch({ type: 'UPDATE_ITEM', payload: { id, newText } });
    }
  };

  const onRestoreItem = (id) => {
    let flag = false;
    const resotredItem = deletedItems.find((item) => item.id === id);
    if (confirm(`${resotredItem.text}를 복구하시겠습니까?`)) {
      if (names.some((name) => name.text === resotredItem.text)) {
        alert('이미 존재하는 항목입니다.');
        //지우기 지운 항목에서
        flag = true;
      }
      dispatch({ type: 'RESTORE_ITEM', payload: resotredItem, flag: flag });
      alert(`복구한 요소는 ${resotredItem.text}입니다.`);
    }
  };

  const asscendingSort = (a, b) => {
    return a.text.localeCompare(b.text);
  };

  const descendingSort = (a, b) => {
    return b.text.localeCompare(a.text);
  };

  const namesList = names
    .sort(sortFlag ? asscendingSort : descendingSort)
    .map((name) => {
      return (
        <li
          key={name.id}
          onDoubleClick={() => onRemove(name.id)}
          onContextMenu={(e) => onRightClick(e, name.id, name.text)}
        >
          {name.text}
        </li>
      );
    });

  const deletedList = deletedItems
    .sort(sortFlag ? asscendingSort : descendingSort)
    .map((name) => (
      <li key={name.id} onDoubleClick={() => onRestoreItem(name.id)}>
        {name.text}
      </li>
    ));

  return (
    <>
      <input
        value={inputText}
        onChange={onChange}
        placeholder="항목을 입력하세요"
      />
      <button onClick={onClick}>추가</button>
      <button onClick={onSort}>{sortFlag ? '오름차순' : '내림차순'}</button>

      <h3>추가된 글</h3>
      <ul className="no_dot">{namesList}</ul>
      <br />
      <br />
      <h3>삭제된 글</h3>
      <ul className="no_dot">{deletedList}</ul>
    </>
  );
};

export default Ex6;
