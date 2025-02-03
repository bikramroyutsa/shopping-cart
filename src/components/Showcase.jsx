import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
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
              <AddToCart product={p} addToCart={addToCart} />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Showcase;
