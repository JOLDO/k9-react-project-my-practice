import './App.css';
import Ex1 from './Ex1';
import Ex2 from './Ex2';

const App = () => (
  <div className="App">
    <header>
      <img className="logo" src="favicon.svg" alt="logo" />
      <h1>챕터9 - React 스타일링 예시</h1>
      <p>Hello React!</p>
    </header>
    <Ex1 />

    <br />
    <Ex2 />
  </div>
);

export default App;
