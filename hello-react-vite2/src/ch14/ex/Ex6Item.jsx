import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #e9ecef;

  .thumbnail {
    margin-right: 1rem;
    img {
      width: 160px;
      height: 100px;
      object-fit: cover;
      border-radius: 4px;
    }
  }

  .contents {
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
  }
`;

const Ex6Item = ({ article }) => {
  const { name, email } = article;

  return (
    <NewsItemBlock>
      <div className="contents">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </NewsItemBlock>
  );
};

export default Ex6Item;
