import { useRef, useState } from 'react';

const IterationSample = () => {
  const [sortFlag, setSortFlag] = useState(true);
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);

  const [delnames, setDeletedNames] = useState([]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);

  const onSort = () => {
    setSortFlag(!sortFlag);
  };

  const onClick = () => {
    let someFlag = names.some((name) => {
      return name.text === inputText; //같은 텍스트가 있는 걸 발견하면 true
    });

    if (someFlag) {
      return;
    }
    const nextNames = names.concat({ id: nextId, text: inputText });
    setNames(nextNames);
    setNextId(nextId + 1);
    setInputText('');
  };

  const moveItem = (id, fromList, toList) => [
    fromList.filter((name) => name.id !== id),
    toList.concat(fromList.find((name) => name.id === id)),
  ];

  const onRecover = (id) => {
    const [nextDel, nextNames] = moveItem(id, delnames, names);
    setDeletedNames(nextDel);
    setNames(nextNames);
  };

  const onRemove = (id) => {
    const [nextNames, nextDel] = moveItem(id, names, delnames);
    setNames(nextNames);
    setDeletedNames(nextDel);
  };

  const onUpdate = (id, newText) => {
    const updatedNames = names.map((name) =>
      name.id == id ? { ...name, text: newText } : name,
    );
    setNames(updatedNames);
  };

  const rightClick = (id, text) => {
    const newText = prompt('수정할 내용을 입력하세요.', text);
    if (newText && newText.trim()) {
      onUpdate(id, newText);
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
    .map((name) => (
      <li
        key={name.id}
        onDoubleClick={() => onRemove(name.id)}
        onContextMenu={() => rightClick(name.id, name.text)}
      >
        {name.text}
      </li>
    ));

  const deletedList = delnames
    .sort(sortFlag ? asscendingSort : descendingSort)
    .map((name) => (
      <li key={name.id} onDoubleClick={() => onRecover(name.id)}>
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

export default IterationSample;
