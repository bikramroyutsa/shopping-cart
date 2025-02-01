import { Link } from "react-router-dom";
function Header({ products, cartCount }) {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/store" state={{ products }}>
        Store
      </Link>
      <Link to="/cart">Cart</Link>
      <div>cart length {cartCount}</div>
    </div>
  );
}
export default Header;
