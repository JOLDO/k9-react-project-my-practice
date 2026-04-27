import Counter from './Counter';
import MyComponent from './MyComponent';
import OthComponent from './OthComponent';
import Say from './Say';
//.jsx는 화면담당, .js는 기능담당
const App = () => {
  return (
    <div>
      <h1>우리가 챕터03에서 만든 App.jsx 파일</h1>
      <MyComponent name="오태흔">children 매개변수 전달 테스트</MyComponent>

      <br />

      <h2>본인 소개 컴포넌트 출력</h2>
      <OthComponent food="면">민락동</OthComponent>

      <br />

      <h2>클래스형 컴포넌트, setState함수를 이용해 상태에 따라 다시 그림</h2>
      <Counter></Counter>

      <br />

      <h2>함수형 컴포넌트, setState함수를 이용해 상태에 따라 다시 그림</h2>
      <Say />
    </div>
  );
};

export default App;
