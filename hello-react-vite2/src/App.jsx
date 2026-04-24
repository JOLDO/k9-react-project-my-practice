import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';

function App() {
  const name = 'ㅇㅋㅇㅋ';
  const name2 = '리액트';
  const name3 = undefined;

  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
  };

  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>
      <p>JSX 안에서 자바스크립트 표현식을 통해 {} 안에 코드를 넣으면 됩니다.</p>
      <div>
        <p>If 문 대신 조건부 연산자 (삼항 연산자)</p>
        {name2 === '리액트' ? (
          <h1>리액트입니다.</h1>
        ) : (
          <h2>리액트가 아닙니다.</h2>
        )}
      </div>

      <div>
        <p>AND 연산자(&&)를 사용한 조건부 렌더링</p>
        {name2 === '리액트' && <h1>리액트입니다.</h1>}
      </div>

      <div>
        <p>undefined를 렌더링하지 않기</p>
        {name3 || <h1>값이 undefined입니다.</h1>}
      </div>

      <div style={style}>{name}</div>
    </>
  );
}

export default App;
