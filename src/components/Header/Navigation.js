import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <NavLink to="/">Shops</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  );
}
