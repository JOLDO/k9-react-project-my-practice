import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { produce } from 'immer';
import CartContext from './CartContext';
import ListPage from './ListPage';
import CartPage from './CartPage';

const products = [
  { id: 1, name: '사과', price: 1000 },
  { id: 2, name: '바나나', price: 1500 },
  { id: 3, name: '포도', price: 3000 },
];

const ContextApp = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems(
      produce((draft) => {
        draft.push(item);
      }),
    );
  };

  const removeItem = (id) => {
    setItems(
      produce((draft) => {
        const index = draft.findIndex((item) => item.id === id);
        if (index !== -1) draft.splice(index, 1);
      }),
    );
  };

  return (
    <CartContext.Provider
      value={{ state: { items }, actions: { addItem, removeItem } }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>장바구니 앱</h1>
              <Link to="/list">
                <button>상품 목록 보기</button>
              </Link>
            </div>
          }
        />
        <Route path="/list" element={<ListPage products={products} />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </CartContext.Provider>
  );
};

export default ContextApp;
