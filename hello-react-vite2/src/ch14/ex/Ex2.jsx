import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Ex2 = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(1); // userId 변경으로 다른 게시글 조회
  const [selectPost, setSelectPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setSelectPost(null);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}&_limit=5`,
        );
        setPosts(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [userId]); // userId가 바뀔 때마다 API 재호출

  return (
    <div style={{ padding: '20px' }}>
      <h1>사용자별 게시글</h1>
      <div>
        {[1, 2, 3].map((id) => (
          <button
            disabled={loading}
            key={id}
            onClick={() => setUserId(id)}
            style={{
              marginRight: '8px',
              fontWeight: userId === id ? 'bold' : 'normal',
              background: userId === id ? '#007bff' : '#eee',
              color: userId === id ? 'white' : 'black',
              padding: '4px 12px',
            }}
          >
            User {id}
          </button>
        ))}
      </div>
      {loading ? (
        <p>로딩 중... ⏳</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li
              key={post.id}
              onClick={() => setSelectPost(post)}
              style={{
                cursor: 'pointer',
                color: selectPost?.id === post.id ? 'blue' : 'white',
              }}
            >
              <strong
                onClick={(e) => {
                  if (selectPost !== null) {
                    e.stopPropagation();
                    setSelectPost(null);
                  }
                }}
              >
                {post.title}
              </strong>
              {selectPost?.id === post.id && (
                <div
                  style={{
                    border: '1px solid #ccc',
                    padding: '16px',
                    marginTop: '16px',
                  }}
                >
                  <p
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectPost(null);
                    }}
                    style={{
                      color: 'white',
                    }}
                  >
                    {selectPost.body}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Ex2;
