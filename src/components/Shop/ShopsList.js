import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ShopsList() {
  const [shops, setShops] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/shops')
      .then((response) => response.json())
      .then((data) => {
        setShops(data);
        console.log(data)
      })
      .catch((error) => {
        console.error('Error when trying to load shops:', error);
      });
  }, []);

  return (
    <div>
      <h1>Shops list</h1>
      <ul>
        {shops.map((shop) => (
          <li key={shop.id}>
            <Link to={`shops/${shop.id}/products`}>{shop.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopsList;
