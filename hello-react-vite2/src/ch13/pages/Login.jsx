// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'test@test.com' && password === '1234') {
      setIsLoggedIn(true);
      navigate('/myPage', { replace: true });
    } else {
      alert('이메일 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  if (isLoggedIn) {
    return (
      <div>
        <p>현재 로그인 상태입니다.</p>
        <button onClick={() => setIsLoggedIn(false)}>로그아웃</button>
      </div>
    );
  }

  return (
    <div>
      <h2>로그인</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
