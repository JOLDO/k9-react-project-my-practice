import EventPractice from './EventPractice';
import EventPractice2 from './EventPractice2';
import EventPractice3 from './EventPractice3';
import PracticeJoin from './PracticeJoin';
import PracticeLogin from './PracticeLogin';

//부모 컴포넌트
const App = () => {
  return (
    <div>
      <h1>챕터4 - 이벤트핸들링</h1>
      {/* 자식 컴포넌트: EventPractice 그려주기 */}
      <h2>연습1</h2>
      <EventPractice></EventPractice>

      <br />

      <h2>연습2</h2>
      <EventPractice2 />

      <br />

      <h2>연습3</h2>
      <EventPractice3 />

      <br />

      <h2>회원가입 연습</h2>
      <PracticeJoin />

      <br />

      <h2>로그인 연습</h2>
      <PracticeLogin />
    </div>
  );
};

export default App;
