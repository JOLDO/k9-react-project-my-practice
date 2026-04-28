import { Component } from 'react';
import ValidationSample from './ValidationSample';
import PracticeJoin from '../ch04/PracticeJoin';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <h1>챕터5 - dom에 ref달기</h1>
        <h2>연습1 - 간단한 유효성 체크확인</h2>
        <ValidationSample />

        <br />

        <h2>연습2 - 특정 입력창에 ref달아서 포커스 주기</h2>
        <PracticeJoin></PracticeJoin>

        <br />

        <h2>연습3 - 스크롤에 ref달아서 제어</h2>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        <button onClick={() => this.scrollBox.scrollToTop()}>맨 위로</button>
        <button onClick={() => this.scrollBox.scrollToMiddle()}>
          중간으로
        </button>
      </div>
    );
  }
}

export default App;
