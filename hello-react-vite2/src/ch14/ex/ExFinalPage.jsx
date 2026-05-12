import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const PageBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  gap: 0.5rem;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

// styled(NavLink): NavLink에 스타일 적용
const Page = styled(NavLink)`
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: #e9ecef;
  color: #343a40;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: #dee2e6;
  }

  /* NavLink가 active일 때 자동으로 .active 클래스 추가 */
  &.active {
    background: #007bff;
    color: white;
    font-weight: 600;
  }
`;

const ExFinalPage = () => (
  <PageBlock>
    {[1, 2, 3].map((c) => (
      <Page key={c} to={`/${c}`}>
        {c}
      </Page>
    ))}
  </PageBlock>
);

export default ExFinalPage;
