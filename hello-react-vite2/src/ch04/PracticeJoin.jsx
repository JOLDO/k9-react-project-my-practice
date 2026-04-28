import { useRef, useState } from 'react';

const PracticeJoin = () => {
  //함수형 컴포넌트에서는 ref를 사용하려면 hooks사용
  const inputRef = useRef(null);

  const [form, setForm] = useState({
    username: '',
    email: '',
    pw: '',
    pwConf: '',
  });

  const { username, email, pw, pwConf } = form;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onClick = () => {
    inputRef.current.focus();
    if (!username || !email || !pw || !pwConf) {
      alert('모든 값을 입력해주세요.');
      return;
    }
    if (pw !== pwConf) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    alert('회원가입 완료!!! - 유저명: ' + username + ', email: ' + email);
    setForm({ username: '', email: '', pw: '', pwConf: '' });
  };

  return (
    <div>
      <h3>username : {username}</h3>
      <h3>email : {email}</h3>
      <h3>password : {pw}</h3>
      <h3>passwordConfirm : {pwConf}</h3>
      <input
        ref={inputRef}
        type="text"
        name="username"
        placeholder="이름!!!!"
        value={username}
        onChange={onChange}
      />
      <input
        type="email"
        name="email"
        placeholder="이메일!!!!"
        value={email}
        onChange={onChange}
      />
      <input
        type="password"
        name="pw"
        placeholder="비번!!!!"
        value={pw}
        onChange={onChange}
      />
      <input
        type="password"
        name="pwConf"
        placeholder="비번확인!!!!"
        value={pwConf}
        onChange={onChange}
      />

      <button onClick={onClick}>회원가입</button>
    </div>
  );
};

export default PracticeJoin;
