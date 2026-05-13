import React from 'react';
import styled from 'styled-components';

const YugiohItem = ({ article }) => {
  const { name, type, humanReadableCardType } = article;

  return (
    <div>
      <ul>
        <li>
          <span>이름: {name}</span>
          <span>타입: {type}</span>
          <span>카드종류: {humanReadableCardType}</span>
        </li>
      </ul>
    </div>
  );
};

export default YugiohItem;
