import React from 'react';
import { Link, useParams } from 'react-router-dom';

const FinalPost = ({ postContent }) => {
  const { id } = useParams();
  const post = postContent[id];

  return post ? (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/posts">← 목록으로</Link>
    </div>
  ) : (
    <p>게시글을 찾을 수 없습니다.</p>
  );
};

export default FinalPost;
