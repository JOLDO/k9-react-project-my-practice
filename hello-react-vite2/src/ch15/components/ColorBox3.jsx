import { useContext } from 'react';
import ColorContext from '../ex/Ex3';
import ThemeContext from '../contexts/ThemeContext';
import UserContext from '../contexts/UserContext';

const ColorBox3 = () => {
  const { state } = useContext(ColorContext); // 한 줄로 Context 접근!
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  const isDark = theme === 'dark';

  return (
    <div style={{ padding: '10px' }}>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color,
          border: '2px solid #333',
          marginBottom: '8px',
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: state.subcolor,
          border: '1px solid #333',
        }}
      />
      <p
        style={{
          fontSize: state.fontSize,
          background: state.color,
          border: '2px solid #333',
          marginBottom: '8px',
        }}
      >
        폰트 사이즈 테스트
      </p>

      <div
        style={{
          padding: '20px',
          background: isDark ? '#333' : '#fff',
          color: isDark ? '#fff' : '#333',
          border: '1px solid #ccc',
          borderRadius: '8px',
          marginTop: '16px',
        }}
      >
        <h2>ColorBox3에 전역저장소 이용</h2>
        <p>
          현재 테마: <strong>{theme}</strong>
        </p>
        <p>
          사용자: <strong>{user.name}</strong>
          {user.isLoggedIn ? ' ✅ 로그인됨' : ' ❌ 미로그인'}
        </p>
      </div>
    </div>
  );
};

export default ColorBox3;
