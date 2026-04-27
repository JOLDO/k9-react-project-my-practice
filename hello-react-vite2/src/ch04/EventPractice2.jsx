import { Component } from 'react';

class EventPractice2 extends Component {
  state = { username: '', message: '' };

  //이벤트 리스너
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({ username: '', message: '' });
  };

  render() {
    return (
      <div>
        <h2>input 여러개 이벤트 연습</h2>
        <h3>username : {this.state.username}</h3>
        <h3>message : {this.state.message}</h3>
        <input
          type="text"
          name="username"
          placeholder="이름!!!!"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="글자!!!!"
          value={this.state.message}
          onChange={this.handleChange}
        />

        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice2;
