import React from 'react';

const ThemeItem = ({ article }) => {
  const {
    RSTR_NM,
    RSTR_LA,
    RSTR_LO,
    RSTR_RDNMADR,
    RSTR_TELNO,
    RSTR_INTRCN_CONT,
  } = article;

  return (
    <div>
      <ul>
        <li>
          <span>이름: {RSTR_NM}</span>
          <span>위도: {RSTR_LA}</span>
          <span>경도: {RSTR_LO}</span>
          <span>주소: {RSTR_RDNMADR}</span>
          <span>전화번호: {RSTR_TELNO}</span>
          <span>설명: {RSTR_INTRCN_CONT}</span>
        </li>
      </ul>
    </div>
  );
};

export default ThemeItem;
