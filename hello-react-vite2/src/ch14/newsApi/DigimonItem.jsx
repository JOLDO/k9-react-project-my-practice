import React from 'react';

const DigimonItem = ({ article }) => {
  const { name, img, level } = article;

  return (
    <div>
      <ul>
        <li>
          <span>이름: {name}</span>
          <span>등급: {level}</span>
          {img && <img src={img} alt={name} width={160} />}
        </li>
      </ul>
    </div>
  );
};

export default DigimonItem;
