import React, { useState } from 'react';
import AddForm from './Product/AddForm';
import Product from './Product/index';
import data from './data.js';

let currentProductId = 9;

const Home = () => {
  const [products, setProducts] = useState(data);

  const addProduct = (product) => {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h1>New Products</h1>
      <ul className="Home__products">
        {products.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </ul>
      <AddForm addProduct={addProduct} />
    </div>
  );
};

export default Home;
