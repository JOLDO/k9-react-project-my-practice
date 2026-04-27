import { Component } from 'react';
import ValidationSample from './ValidationSample';

class App extends Component {
  render() {
    return (
      <div>
        <h1>챕터5 - dom에 ref달기</h1>
        <h2>연습1 - 간단한 유효성 체크확인</h2>
        <ValidationSample />
      </div>
    );
  }
}

export default App;
