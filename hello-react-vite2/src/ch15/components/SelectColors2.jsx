import { useContext } from 'react';
import ColorContext from '../contexts/ColorContext2';
import Ex3 from '../ex/Ex3';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors2 = () => {
  // const { state, actions } = useContext(ColorContext); // actions만 꺼내서 사용
  const { state, actions } = useContext(Ex3); // actions만 꺼내서 사용

  return (
    <div style={{ padding: '10px' }}>
      <h2>색상을 선택하세요.</h2>
      <div style={{ display: 'flex', gap: '4px' }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: '36px',
              height: '36px',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
            onClick={() => actions.setColor(color)}
            onContextMenu={(e) => {
              e.preventDefault();
              actions.setSubcolor(color);
            }}
          />
        ))}
      </div>
      <p>
        메인: <span style={{ color: state.color }}>{state.color}</span> | 서브:{' '}
        <span style={{ color: state.subcolor }}>{state.subcolor}</span>
      </p>
      <hr />
      <span>폰트 크기</span>
      {[
        ['small', '12px'],
        ['medium', '16px'],
        ['large', '24px'],
      ].map(([label, size]) => (
        <button
          key={label}
          style={{ fontSize: state.fontSize }}
          onClick={() => actions.setFontSize(size)}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default SelectColors2;
