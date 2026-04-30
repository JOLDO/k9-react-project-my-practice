import React, { useState } from 'react';
import Counter from './Counter';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Info from './Info';
import Ex3 from './Ex3';
import Ex4 from './Ex4';
import Counter2 from './Counter2';
import Ex5 from './EX5';
import Ex6 from './Ex6';
import '../App.css';
import Average from './Average';
import Ex7 from './Ex7';
import Average2 from './Average2';
import Ex8 from './Ex8';
import Average3 from './Average3';
import Ex9 from './Ex9';
import Ex10 from './Ex10';
import Info2 from './Info2';
import Ex11 from './Ex11';
import Ex12 from './Ex12';

const App = () => {
  //Ex4 에서, 언마운트 효과 내기를 위한 상태 추가.
  const [isShowing, setIsShowing] = useState(true);

  return (
    <div>
      <h1>ch8 hooks 특수 함수 알아보기</h1>
      <h2>useState 기본 예시 연습</h2>
      <Counter></Counter>
      <br />
      <h3>실습1 </h3>
      <p>
        버튼을 클릭하면 숫자가 2씩 증가하고, 다른 버튼을 클릭하면 0으로
        초기화되는 컴포넌트를 만들어 보세요
      </p>
      <Ex1></Ex1>
      <h3>실습2 </h3>
      <p>
        이름과 나이를 입력받는 폼 컴포넌트를 만드세요. 각각 별도의 state로
        관리하고, 현재 입력된 값을 화면에 표시하세요.
      </p>
      <Ex2></Ex2>
      <br />
      <h2>useEffect 기본 예시 연습</h2>
      <Info></Info>
      <br />
      <h3>실습3 </h3>
      <p>
        컴포넌트가 처음 마운트될 때 딱 한 번 "컴포넌트가 화면에 나타났습니다!"
        를 콘솔에 출력하는 컴포넌트를 만드세요
      </p>
      <Ex3></Ex3>
      <br />
      <h3>실습4 </h3>
      <p>
        숫자를 1초마다 자동으로 1씩 증가시키는 타이머 컴포넌트를 만드세요.
        컴포넌트가 언마운트될 때 타이머가 정리(cleanup)되어야 합니다. 힌트 -
        setInterval(콜백함수, 특정시간(ms)), 1000ms = 1초 힌트2 -
        clearInterval(interval); // 언마운트 시 타이머 정리
      </p>
      <h3>Ex4 언마운트 테스트 </h3>
      <button onClick={() => setIsShowing(!isShowing)}>
        {isShowing ? '타이머 컴포넌트 숨기기' : '타이머 컴포넌트 보이기'}
      </button>
      <hr />
      {isShowing && <Ex4 />}
      <br />
      <h2>useReducer 기본 예시 연습</h2>
      <Counter2 />

      <br />
      <h2>실습</h2>
      <Ex5 />

      <br />
      <h2>실습</h2>
      <Ex6 />

      <br />
      <hr />
      <h2>useMemo 기본 예시 연습</h2>
      <Average />

      <br />
      <h2>실습</h2>
      <Ex7 />

      <br />
      <hr />
      <h2>useCallback 기본 예시 연습</h2>
      <Average2></Average2>

      <br />
      <h2>실습</h2>
      <Ex8 />

      <br />
      <hr />
      <h2>useRef 기본 예시 연습</h2>
      <Average3></Average3>

      <br />
      <h2>실습</h2>
      <Ex9 />

      <br />
      <h2>실습</h2>
      <Ex10 />

      <br />
      <hr />
      <h2>customHooks 기본 예시 연습</h2>
      <Info2 />

      <br />
      <h2>실습</h2>
      <Ex11 />

      <br />
      <h2>실습</h2>
      <Ex12 />
    </div>
  );
};

export default App;
