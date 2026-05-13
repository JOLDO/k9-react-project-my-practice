import React from 'react';

const ImageItem = ({ article }) => {
  const { RSTR_NM, AREA_NM, RSTR_IMG_URL } = article;

  return (
    <div>
      <ul>
        <li>
          <span>이름: {RSTR_NM}</span>
          <span>주소: {AREA_NM}</span>
          {RSTR_IMG_URL && <img src={RSTR_IMG_URL} alt={RSTR_NM} width={160} />}
        </li>
      </ul>
    </div>
  );
};

export default ImageItem;
