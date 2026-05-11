import { Outlet, Link, NavLink } from 'react-router-dom';
import Ex5 from '../ex/Ex5';

const navStyle = { marginRight: '12px', textDecoration: 'none', color: '#555' };
const activeStyle = { ...navStyle, color: 'blue', fontWeight: 'bold' };

const Layout = () => (
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
        to="/about"
        style={({ isActive }) => (isActive ? activeStyle : navStyle)}
      >
        소개
      </NavLink>
      <NavLink
        to="/profiles/root"
        // style={({ isActive }) => (isActive ? activeStyle : navStyle)}
        className={({ isActive }) => (isActive ? 'active-link' : 'normal-link')}
      >
        프로필
      </NavLink>

      <NavLink
        to="/useNavigate"
        // style={({ isActive }) => (isActive ? activeStyle : navStyle)}
        style={({ isActive }) => ({
          color: isActive ? 'green' : 'black',
          fontWeight: isActive ? 'bold' : 'normal',
        })}
      >
        네비게이트
      </NavLink>

      <NavLink
        to="/myPage"
        // style={({ isActive }) => (isActive ? activeStyle : navStyle)}
        className={({ isActive }) => (isActive ? 'active-link' : 'normal-link')}
      >
        마이페이지
      </NavLink>

      <NavLink
        to="/login"
        // style={({ isActive }) => (isActive ? activeStyle : navStyle)}
        className={({ isActive }) => (isActive ? 'active-link' : 'normal-link')}
      >
        로그인
      </NavLink>

      <NavLink
        to="/myPage2"
        //   style={({ isActive }) => (isActive ? activeStyle : navStyle)}
        style={({ isActive }) => ({
          color: isActive ? 'green' : 'black',
          fontWeight: isActive ? 'bold' : 'normal',
        })}
      >
        Ex6-myPage
      </NavLink>

      <Ex5 />
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

export default Layout;
