import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function ShopsPage() {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/shops')
      .then((response) => response.json())
      .then((data) => {
        setShops(data);
      })
      .catch((error) => {
        console.error('Error when trying to load shops:', error);
      });
  }, []);

  return (
    <div>
      <h1>Список магазинов</h1>
      <ul>
        {shops.map((shop) => (
          <li key={shop.id}>
            <Link to={`/shops/${shop.id}`}>{shop.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopsPage;
