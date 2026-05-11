import { useParams, Link } from 'react-router-dom';

// 프로필 데이터 (실제 앱에선 API로 받아옴)
const profileData = {
  oth: {
    name: '오태흔',
    description: '나',
  },
  kse: {
    name: '김상은',
    description: '칠성맨',
  },
  sm: {
    name: '손민',
    description: '부',
  },
  kjw: {
    name: '김종원',
    description: '랄',
  },
};

const Ex2 = () => {
  const params = useParams(); // { username: 'oth' }
  const profile = profileData[params.username];

  return (
    <div>
      <h1>사용자 프로필 👤</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
      <hr />
      <Link to="/">홈으로</Link>
    </div>
  );
};

export default Ex2;
