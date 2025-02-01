import { Link } from "react-router-dom";
function Showcase({ products, addToCart }) {
  return (
    <>
      <div className="showCase">
        {products.map((p) => {
          return (
            <div className="product" key={p.id}>
              <div className="productTitle">{p.title}</div>
              <div className="productImgContainer">
                <img src={p.image} alt={p.title} className="productImg" />
              </div>
              <div className="productPrice">{p.price}</div>
              <button className="btnSeeDetails">
                <Link
                  to={`/product-details/${p.title}`}
                  state={{ p, products }}
                >
                  See details
                </Link>
              </button>
              <button
                className="btnAddToCart"
                onClick={() => {
                  addToCart(p);
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Showcase;
