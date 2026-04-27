import { Component } from 'react';
import '../App.css';

class Counter extends Component {
  state = { number: 0, fixedNumber: 0 };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          className="counter"
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
        <br />
        <button
          className="counter"
          onClick={() => {
            if (number > 0) {
              this.setState({ number: number - 1 });
            }
          }}
        >
          -1
        </button>
        <br />
        <button
          className="counter"
          onClick={() => {
            if (number != 0) {
              this.setState({ number: 0 });
            }
          }}
        >
          초기화
        </button>
      </div>
    );
  }
}

export default Counter;
