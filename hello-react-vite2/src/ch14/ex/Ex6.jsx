import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NewsItem from '../newsApi/NewsItem';
import usePromise from '../newsApi/usePromise';
import Ex6Item from './Ex6Item';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding: 0 5rem;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

// YOUR_API_KEY 자리에 newsapi.org에서 발급받은 키를 입력하세요
//.env 파일에서 읽어올때 react가 vite 환경이라면 VITE_라는 이름을 앞에 붙여 줘야 함
const apiKey = import.meta.env.VITE_News_API_KEY;

const Ex6 = () => {
  //커스텀 훅스 사용 후 코드
  const [loading, resolved, error] = usePromise(() => {
    return axios.get(`https://jsonplaceholder.typicode.com/users`);
  }, []);
  if (loading)
    return (
      <NewsListBlock>
        <p>⏳ 뉴스를 불러오는 중...</p>
      </NewsListBlock>
    );
  if (error)
    return (
      <NewsListBlock>
        <p style={{ color: 'red' }}>{error}</p>
      </NewsListBlock>
    );
  if (!resolved) return null;

  const articles = resolved.data;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <Ex6Item key={article.name} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default Ex6;
