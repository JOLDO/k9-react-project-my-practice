import { useState } from 'react';

const Say = () => {
  //useState 함수를 이용하면 결과로 2개를 반환하는데 1)빈문자열 초기값(message) 2)세터함수를 반환(setMessage)
  const [message, setMessage] = useState('---');
  const [color, setColor] = useState('black');

  //이벤트 핸들러 추가
  const onClickEnter = () => setMessage('안녕하세요. enter이벤트 동작');
  const onClickLeave = () => setMessage('안녕하세요. leave이벤트 동작');
  const onColorChangeRed = () => setColor('red');
  const onColorChangeGreen = () => setColor('green');
  const onColorChangeAqua = () => setColor('aqua');
  const onColorChangeBlack = () => setColor('black');
  return (
    <div>
      <button style={{ color }} onClick={onClickEnter}>
        입장
      </button>
      <button style={{ color }} onClick={onClickLeave}>
        퇴장
      </button>

      <br />

      {/* <h1 style={{ color: color }}>{message}</h1> */}
      <h1 style={{ color }}>{message}</h1>

      <br />

      <button style={{ color: 'red' }} onClick={onColorChangeRed}>
        빨간색
      </button>

      <button style={{ color: 'green' }} onClick={onColorChangeGreen}>
        녹색
      </button>

      <button style={{ color: 'aqua' }} onClick={onColorChangeAqua}>
        아쿠아색
      </button>

      <button style={{ color: 'black' }} onClick={onColorChangeBlack}>
        검정색
      </button>
    </div>
  );
};

export default Say;
