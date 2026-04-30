import React from 'react';
import useToggle from './useToggle';

const Ex11 = () => {
  const [isOn, toggle] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>{isOn ? '🟢' : '🔴'}</button>
    </div>
  );
};

export default Ex11;
