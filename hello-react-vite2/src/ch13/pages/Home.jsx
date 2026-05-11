import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>홈 페이지 🏠</h1>
      <p>환영합니다! 여기는 메인 홈 화면입니다.</p>
      <li>
        <Link to="/profiles/root">관리자 프로필</Link>
      </li>
      <li>
        <Link to="/profiles/hong">홍길동 프로필</Link>
      </li>
      <li>
        <Link to="/ex2/oth">오태흔 프로필</Link>
      </li>
      <li>
        <Link to="/ex2/kse">김상은 프로필</Link>
      </li>
      <li>
        <Link to="/ex2/sm">손민 프로필</Link>
      </li>
      <li>
        <Link to="/ex2/kjw">김종원 프로필</Link>
      </li>
      <li>
        <Link to="/profiles/no">존재x 프로필</Link>
      </li>
    </div>
  );
};

export default Home;
