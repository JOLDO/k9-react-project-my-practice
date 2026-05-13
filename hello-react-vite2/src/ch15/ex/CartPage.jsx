import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from './CartContext';

const CartPage = () => {
  const { state, actions } = useContext(CartContext);

  return (
    <div style={{ padding: '20px', maxWidth: '400px', minWidth: '300px', margin: '0 auto' }}>
      <h1>장바구니</h1>
      <p>총 {state.items.length}개</p>
      {state.items.length === 0 ? (
        <p>담긴 상품이 없습니다.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {state.items.map((item) => (
            <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', marginBottom: '8px', background: '#f8f9fa', borderRadius: '8px' }}>
              <span>{item.name} - {item.price}원</span>
              <button onClick={() => actions.removeItem(item.id)}>삭제</button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/list"><button>상품 목록으로</button></Link>
    </div>
  );
};

export default CartPage;
