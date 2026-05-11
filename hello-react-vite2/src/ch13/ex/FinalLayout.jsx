import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navStyle = { marginRight: '12px', textDecoration: 'none', color: '#555' };
const activeStyle = { ...navStyle, color: 'blue', fontWeight: 'bold' };

const FinalLayout = () => {
  return (
    <div>
      {/* 공통 헤더 */}
      <header style={{ background: '#f0f0f0', padding: '12px' }}>
        <NavLink
          to="/"
          end // 정확히 /일 때만 active (하위 경로 제외)
          style={({ isActive }) => (isActive ? activeStyle : navStyle)}
        >
          홈
        </NavLink>

        <NavLink
          to="/posts"
          style={({ isActive }) => (isActive ? activeStyle : navStyle)}
        >
          게시판
        </NavLink>
      </header>

      {/* 페이지 내용: 각 라우트의 컴포넌트가 여기에 렌더링 */}
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>

      {/* 공통 푸터 */}
      <footer
        style={{
          background: '#333',
          color: '#fff',
          padding: '12px',
          textAlign: 'center',
        }}
      >
        © 2026 React Router Tutorial
      </footer>
    </div>
  );
};

export default FinalLayout;
