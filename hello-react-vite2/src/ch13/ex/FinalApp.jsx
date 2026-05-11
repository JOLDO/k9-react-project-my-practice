import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FinalLayout from './FinalLayout';
import FinalHome from './FinalHome';
import FinalNotFound from './FinalNotFound';
import FinalPosts from './FinalPosts';
import FinalPost from './FinalPost';

const postContent = {
  1: { title: '첫 번째 게시글', body: '집가서 밥하기.' },
  2: {
    title: '두 번째 게시글',
    body: '오리불고기 있는거 조리하기.',
  },
  3: { title: '세 번째 게시글', body: '노트북 충전하기.' },
};

const FinalApp = () => {
  return (
    <Routes>
      <Route element={<FinalLayout />}>
        <Route path="/" element={<FinalHome />} />
        <Route path="/posts" element={<FinalPosts postContent={postContent} />}>
          <Route index element={<p>← 왼쪽 목록에서 게시글을 선택하세요</p>} />
          <Route path=":id" element={<FinalPost postContent={postContent} />} />
        </Route>
        {/* App.jsx Routes 마지막에 추가 */}
        <Route path="*" element={<FinalNotFound />} />
        {/* * = 어떤 경로도 매칭 안될 때 */}
      </Route>
    </Routes>
  );
};

export default FinalApp;
