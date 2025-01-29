import { Link } from "react-router-dom";
function Showcase({ products }) {
  return (
    <>
      <div className="showCase">
        {products.map((p) => {
          return (
            <div className="product" key={p.id}>
              <div className="productTitle">{p.title}</div>
              <div className="producImgContainer">
                <img src={p.image} alt={p.title} className="productImg" />
              </div>
              <div className="productPrice">{p.price}</div>
              <button className="btnSeeDetails">See details</button>
              <button className="btnAddToCart">Add to Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Showcase;
