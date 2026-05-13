import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartContext from './CartContext';

const List = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 400px;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 8px;
  background: #f8f9fa;
  border-radius: 8px;
  font-size: 1rem;
`;

const AddButton = styled.button`
  padding: 6px 14px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: #388e3c;
  }
`;

const ListPage = ({ products }) => {
  const { state, actions } = useContext(CartContext);

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '400px',
        minWidth: '300px',
        margin: '0 auto',
      }}
    >
      <h1>상품 목록</h1>
      <List>
        {products.map((product) => (
          <Item key={product.id}>
            <span>
              {product.name} - {product.price}원
            </span>
            {state.items.some((item) => item.id === product.id) ? (
              <AddButton onClick={() => actions.removeItem(product.id)}>해제</AddButton>
            ) : (
              <AddButton onClick={() => actions.addItem(product)}>담기</AddButton>
            )}
          </Item>
        ))}
      </List>
      <Link to="/cart">
        <button>장바구니 보기 ({state.items.length})</button>
      </Link>
    </div>
  );
};

export default ListPage;
