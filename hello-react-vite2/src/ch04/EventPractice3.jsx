import { useState } from 'react';

const EventPractice3 = () => {
  // useState를 이용해서 2가지를 모두 반환
  // form = {username: '', message: ''}, 초기값이 할당
  // 추가로 form을 설정하는 setForm함수도 포함
  const [form, setForm] = useState({ username: '', message: '' });

  // 객체 form에서 변수명을 구조분해 할당
  const { username, message } = form;
  /*
    // 예시 1: 단순 객체 복사와 업데이트
    // JavaScript
    const user = { name: '이상용', age: 30, city: 'Busan' };

    // 나이만 수정하고 싶을 때
    const updatedUser = {
        ...user,
        age: 31
    };

    console.log(updatedUser); // { name: '이상용', age: 31, city: 'Busan' }
  */

  /*
    // 예시 2: 중첩된 객체에서의 주의사항 (Shallow Copy)
    // Spread 연산자는 얕은 복사를 수행합니다. 즉, 객체 안에 객체가 또 있는 경우 1단계만 복사됩니다.
  
    // JavaScript
    const state = {
    id: 1,
        profile: {
            nickname: 'goldmagnet',
            theme: 'dark'
        }
    };

    // 프로필의 테마만 바꾸고 싶다면?
    const nextState = {
        ...state,
        profile: {
            ...state.profile, // profile 내부도 한번 더 펼쳐줘야 합니다.
            theme: 'light'
        }
    };
  */

  // 이벤트 리스너 추가
  // input에 입력된 내용이 변경될때마다 동작하는 리스너
  const onChangeInput = (e) => {
    const nextForm = {
      ...form, //spread 연산자, 기존 객체를 복사
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  // 버튼 클릭시 동작하는 이벤트 리스너
  const onClick = () => {
    alert(username + ': ' + message);
    setForm({ username: '', message: '' });
  };

  // 키를 입력시 확인하는 이벤트 리스너
  const onKeyPressed = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <div>
        <h2>input 여러개 이벤트 연습(함수형)</h2>
        <h3>username : {username}</h3>
        <h3>message : {message}</h3>
        <input
          type="text"
          name="username"
          placeholder="이름!!!!"
          value={username}
          onChange={onChangeInput}
        />
        <input
          type="text"
          name="message"
          placeholder="글자!!!!"
          value={message}
          onChange={onChangeInput}
        />

        <button onClick={onClick} onKeyPressed={onKeyPressed}>
          확인
        </button>
      </div>
    </div>
  );
};

export default EventPractice3;
