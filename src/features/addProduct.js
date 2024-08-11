import React, { useState , Fragment } from 'react';
import AddForm from './Product/AddForm';
import Product from '../Product/index.js';
import data from './data.js';
 
let currentProductId = data.length;

export default function Home() {
  const [products, setProducts] = useState(data);

  const addProduct = (product) => {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
  };

  return (
    <Fragment>
      <h1>New Products</h1>
      {products.length > 0 ? (
        <ul className="Home__products">
          {products.map((product) => (
            <Product key={product.id} item={product} />
          ))}
        </ul>
      ) : (
        <div>Loading products....</div>
      )}
      <AddForm addProduct={addProduct} />
    </Fragment>
  );
}


