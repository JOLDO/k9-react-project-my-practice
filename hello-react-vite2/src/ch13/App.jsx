import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import { Link, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Ex1 from './ex/Ex1';
import Ex2 from './ex/Ex2';
import Profile from './pages/Profile';
import Ex3 from './ex/Ex3';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Ex4 from './ex/Ex4';
import Layout from './pages/Layout';
import UseNavigate from './pages/UseNavigate';
import NotFound from './pages/NotFound';
import MyPage from './pages/MyPage';
import Login from './pages/Login';
import Ex6 from './ex/Ex6';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <h1>ch13 - 리액트 라우팅 연습</h1>
      <h2>react-router-dom:7.15.0</h2>
      {/* 내비게이션 메뉴 */}
      <nav>
        <Link to="/">홈</Link> | <Link to="/about">소개</Link> |{' '}
        <Link to="/contact">연락처</Link> |{' '}
        <Link to="contact-ex1">연락처-ex1</Link> |{' '}
        <Link to="ex3">소개-ex3</Link> |{' '}
        <Link to="articles">Articles</Link>{' '}
      </nav>
      <hr />
      {/* 라우트 설정 */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-ex1" element={<Ex1 />} />
          <Route path="/profiles/:username" element={<Profile />} />
          <Route path="/ex2/:username" element={<Ex2 />} />
          <Route path="/ex3" element={<Ex3 />} />
          <Route path="/articles" element={<Articles />}>
            <Route index element={<Ex4 />} />
            <Route path=":id" element={<Article />} />
          </Route>
          <Route path="/useNavigate" element={<UseNavigate />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myPage2" element={<Ex6 />} />
          {/* App.jsx Routes 마지막에 추가 */}
          <Route path="*" element={<NotFound />} />{' '}
          {/* * = 어떤 경로도 매칭 안될 때 */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
