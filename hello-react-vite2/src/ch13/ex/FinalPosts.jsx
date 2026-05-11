import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const FinalPosts = ({ postContent }) => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {/* 왼쪽: 목록 */}
      <div>
        <h2>게시글 목록 📰</h2>
        <ul>
          {Object.keys(postContent).map((id) => (
            <li key={id}>
              <Link to={`/posts/${id}`}>{postContent[id].title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* 오른쪽: 선택된 게시글 내용 (Outlet이 자식 라우트 렌더링) */}
      <div style={{ borderLeft: '1px solid #ccc', paddingLeft: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default FinalPosts;
