import React from 'react';
import ColorContext from '../contexts/ColorContext';

const Ex1 = () => (
  <ColorContext.Consumer>
    {(value) => (
      <div>
        <div
          style={{
            width: '64px',
            height: '64px',
            background: value.color,
            border: '1px solid #333',
          }}
        ></div>
        <span>{value.color}</span>
      </div>
    )}
  </ColorContext.Consumer>
);

export default Ex1;
