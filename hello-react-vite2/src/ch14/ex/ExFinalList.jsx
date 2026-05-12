import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ExFinalItem from './ExFinalItem';
import usePromise from '../newsApi/usePromise';

const PostListBlock = styled.div`
  box-sizing: border-box;
  padding: 0 5rem;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const ExFinalList = ({ page }) => {
  const [loading, resolved, error] = usePromise(() => {
    const query = `_page=${page}`;
    return axios.get(
      `https://jsonplaceholder.typicode.com/posts?${query}&_limit=5`,
    );
  }, [page]);
  if (loading)
    return (
      <PostListBlock>
        <p>⏳ 게시글 불러오는 중...</p>
      </PostListBlock>
    );
  if (error)
    return (
      <PostListBlock>
        <p style={{ color: 'red' }}>{error}</p>
      </PostListBlock>
    );
  if (!resolved) return null;

  const posts = resolved.data;

  return (
    <PostListBlock>
      {posts.map((post) => (
        <ExFinalItem key={post.id} post={post} />
      ))}
    </PostListBlock>
  );
};

export default ExFinalList;
