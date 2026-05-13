import React, { useState } from 'react';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/ColorContext';
import Ex1 from './ex/Ex1';
import { ColorProvider } from './ex/Ex3';
import SelectColors from './components/SelectColors';
import ColorBox2 from './components/ColorBox2';
import Ex2 from './ex/Ex2';
import ColorBox3 from './components/ColorBox3';
import SelectColors2 from './components/SelectColors2';
import UserContext from './contexts/UserContext';
import ThemeContext from './contexts/ThemeContext';
import Dashboard from './components/Dashboard';
import Ex4 from './ex/Ex4';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [user, setUser] = useState({ name: '게스트', isLoggedIn: false });
  const [language, setLanguage] = useState('ko');

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  const toggleLogin = () =>
    setUser((u) =>
      u.isLoggedIn
        ? { name: '게스트', isLoggedIn: false }
        : { name: '이상용', isLoggedIn: true },
    );
  const toggleLanguage = () => setLanguage((l) => (l === 'ko' ? 'en' : 'ko'));

  return (
    <Ex4.Provider value={language}>
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={user}>
          <div>
            <h1>챕터15 - Context API 예시</h1>
            <hr></hr>
            <h3>Provider 없음 → 기본값 'black' 사용</h3>
            <ColorBox />

            <h3>Provider로 'red' 공급</h3>
            <ColorContext.Provider value={{ color: 'red' }}>
              <ColorBox />
            </ColorContext.Provider>
            <h3>Provider로 'blue' 공급</h3>
            <ColorContext.Provider value={{ color: 'blue' }}>
              <ColorBox />
            </ColorContext.Provider>
            <h3>실습1</h3>
            <Ex1 />
            <ColorContext.Provider value={{ color: 'red' }}>
              <Ex1 />
            </ColorContext.Provider>
            <ColorContext.Provider value={{ color: 'blue' }}>
              <Ex1 />
            </ColorContext.Provider>
            <br />
            <hr />
            <ColorProvider>
              {' '}
              {/* 이 안의 모든 컴포넌트가 Context 접근 가능 */}
              <div style={{ padding: '20px' }}>
                <h1>동적 Context 예시 🎨</h1>
                <SelectColors />
                <h1>실습2</h1>
                <Ex2 />
                <ColorBox2 />

                <h2>useContext를 이용한 ColorBox3</h2>
                <ColorBox3 />
                <h2>useContext를 이용한 Selectcolors2</h2>
                <SelectColors2 />
              </div>
            </ColorProvider>
            <h2>중첩 Context 이용하기</h2>
            <div style={{ padding: '20px' }}>
              <h1>여러 Context 동시 사용 예제</h1>
              <button onClick={toggleTheme} style={{ marginRight: '8px' }}>
                테마 전환 ({theme})
              </button>
              <button onClick={toggleLogin} style={{ marginRight: '8px' }}>
                {user.isLoggedIn ? '로그아웃' : '로그인'}
              </button>
              <button onClick={toggleLanguage}>언어 전환 ({language})</button>
              <Dashboard />
            </div>
          </div>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </Ex4.Provider>
  );
};

export default App;
