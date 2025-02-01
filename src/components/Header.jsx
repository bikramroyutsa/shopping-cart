import { Link } from "react-router-dom";
function Header({ products }) {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/store" state={{ products }}>
        Store
      </Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
}
export default Header;
