import { useState } from 'react';

const PracticeLogin = () => {
  const [form, setForm] = useState({
    email: '',
    pw: '',
  });

  const { email, pw } = form;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onClick = () => {
    if (!email || !pw) {
      alert('모든 값을 입력해주세요.');
      return;
    }

    alert('로그인 성공!!!');

    setForm({ email: '', pw: '' });
  };

  return (
    <div>
      <h3>email : {email}</h3>
      <h3>password : {pw}</h3>
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

      <button onClick={onClick}>로그인</button>
    </div>
  );
};

export default PracticeLogin;
