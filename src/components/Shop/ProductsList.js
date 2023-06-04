import React, { useEffect, useState } from 'react';

function ProductsList() {
  const [products, setProductd] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/shops/1/products')
      .then((response) => response.json())
      .then((data) => {
        setProductd(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error when trying to load shops:', error);
      });
  }, []);
  return (
    <div>
      <h1>Products list</h1>
      <ul>
        {/* {products.map((product) => (
          <li key={product.id}>
            <p>{product.name}</p>
          </li>
        ))} */}
      </ul>
    </div>
  );
}

export default ProductsList;
