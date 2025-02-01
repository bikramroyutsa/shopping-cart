import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <h2>You have arrived at your favourite shop</h2>
      <button className="btnstore">
        <Link to="/store">Go to store</Link>
      </button>
    </>
  );
}
export default Home;
