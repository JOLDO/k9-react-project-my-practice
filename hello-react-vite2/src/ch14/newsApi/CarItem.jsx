import React from 'react';

const CarItem = ({ article }) => {
  const { entrpsNm, latitude, longitude, rprsntvNm, insttNm } = article;

  return (
    <div>
      <ul>
        <li>
          <span>이름: {entrpsNm}</span>
          <span>위도: {latitude}</span>
          <span>경도: {longitude}</span>
          <span>대표: {rprsntvNm}</span>
          <span>도시: {insttNm}</span>
        </li>
      </ul>
    </div>
  );
};

export default CarItem;
