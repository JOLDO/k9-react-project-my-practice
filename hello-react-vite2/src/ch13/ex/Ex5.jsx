import React, { useEffect, useState } from 'react';

const Ex5 = () => {
  const [startTime] = useState(new Date()); // 마운트 시 고정
  const [now, setNow] = useState(new Date()); // 매초 갱신

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const elapsed = Math.floor((now - startTime) / 1000); // 경과 초

  return (
    <div>
      <span>현재 시각: {now.toLocaleTimeString()}</span>
      <br />
      <span>경과 시간: {elapsed}초</span>
    </div>
  );
};

export default Ex5;
