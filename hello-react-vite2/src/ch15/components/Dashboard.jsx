import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import UserContext from '../contexts/UserContext';
import Ex4 from '../ex/Ex4';

const texts = {
  ko: {
    title: '대시보드',
    themeTitle: '현재 테마',
    user: '사용자',
    currentLang: '현재 언어',
  },
  en: {
    title: 'Dashboard',
    themeTitle: 'Theme',
    user: 'User',
    currentLang: 'Lang',
  },
};

const Dashboard = () => {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);
  const language = useContext(Ex4);

  const isDark = theme === 'dark';
  const convert = texts[language];

  return (
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
      <h2>대시보드</h2>
      <p>
        현재 테마: <strong>{theme}</strong>
      </p>
      <p>
        사용자: <strong>{user.name}</strong>
        {user.isLoggedIn ? ' ✅ 로그인됨' : ' ❌ 미로그인'}
      </p>
      <p>
        현재 언어: <strong>{language}</strong>
      </p>

      <h2>언어 변경 테스트</h2>
      <h2>{convert.title}</h2>
      <p>
        {convert.themeTitle}: <strong>{theme}</strong>
      </p>
      <p>
        {convert.user}: <strong>{user.name}</strong>
        {user.isLoggedIn ? ' ✅ 로그인됨' : ' ❌ 미로그인'}
      </p>
      <p>
        {convert.currentLang}: <strong>{language}</strong>
      </p>
    </div>
  );
};

export default Dashboard;
