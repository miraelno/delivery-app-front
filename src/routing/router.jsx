import { createBrowserRouter } from 'react-router-dom';
import ShopsPage from '../pages/ShopPage/ShopsPage';
import { CartPage } from '../pages/CartPage/CartPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ShopsPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
]);
