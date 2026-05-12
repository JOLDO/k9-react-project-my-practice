import styled from 'styled-components';

const PostItemBlock = styled.div`
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #e9ecef;
  h2 {
    margin: 0 0 8px 0;
    font-size: 1rem;
    a {
      color: black;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  p {
    margin: 0;
    line-height: 1.5;
    color: #666;
    font-size: 0.9rem;
    //영역을 넘어가는 텍스트를 숨김
    overflow: hidden;
    //여러 줄 말줄임 처리를 위한 flex 박스 형태설정
    display: -webkit-box;
    //최대 3줄까지만 보여주고 초과 텍스트는 잘라냄
    -webkit-line-clamp: 3;
    //박스방향을 세로로 설정해서 줄단위로 표시
    -webkit-box-orient: vertical;
  }
`;

const ExFinalItem = ({ post }) => {
  const { userId, id, title, body } = post;

  return (
    <PostItemBlock>
      <h2>{userId}</h2>
      <h2>{id}</h2>
      <p>{title}</p>
      <p>{body}</p>
    </PostItemBlock>
  );
};

export default ExFinalItem;
