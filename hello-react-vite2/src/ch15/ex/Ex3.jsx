import { createContext, useState } from 'react';

// 기본값: 타입 힌트 역할 (실제 값은 Provider가 공급)
const Ex3 = createContext({
  state: { color: 'black', subcolor: 'red', fontSize: '16px' },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
    setFontSize: () => {},
  },
});

// Provider를 감싼 커스텀 컴포넌트
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');
  const [fontSize, setFontSize] = useState('16px');

  const value = {
    state: { color, subcolor, fontSize },
    actions: { setColor, setSubcolor, setFontSize },
  };

  return <Ex3.Provider value={value}>{children}</Ex3.Provider>;
};

// Consumer를 별칭으로 export (사용 편의)
const { Consumer: ColorConsumer } = Ex3;

export { ColorProvider, ColorConsumer };
export default Ex3;
