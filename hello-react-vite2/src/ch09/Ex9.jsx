import styled, { css } from 'styled-components';

// 1)카드 레이아웃 2)상품이름 3)가격 4)행부분 5)세일 뱃지
const Card = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 280px;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ProductName = styled.h3`
  margin: 0 0.5rem;
  font-size: 1.1rem;
  color: #333;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Price = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: #1380ed;
`;

const Badge = styled.span`
  background: #f44336;
  color: white;
  border-radius: 4px;
  padding: 0.15rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
`;

const Ex9 = ({ name, price, isDiscounted }) => {
  return (
    <div>
      <Card>
        <ProductName>{name}</ProductName>
        <PriceRow>
          <Price>{price.toLocaleString()}원</Price>
          {isDiscounted && <Badge>SALE</Badge>}
        </PriceRow>
      </Card>
    </div>
  );
};

export default Ex9;
