import { Link } from "react-router-dom";
import Header from "../components/Header";
function Home({ products }) {
  return (
    <>
      <Header products = {products}/>
      <h2>You have arrived at your favourite shop</h2>
      <button className="btnstore">
        <Link to="/store" state={{ products }}>
          Go to store
        </Link>
      </button>
    </>
  );
}
export default Home;
