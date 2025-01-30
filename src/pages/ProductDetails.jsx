import { useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
function ProductDetails() {
  const location = useLocation();
  const [product, setProduct] = useState(location.state?.p || null);
  return (
    <div className="productDetails">
      <Header products={location.state.products} />
      <div>{product.title}</div>

      <div className="productImgContainer">
        <img
          className="productImgLarge"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div>{product.description}</div>
      <div>price: {product.price}</div>
      <div>items sold: {product.rating.count}</div>
      <div>rating: {product.rating.rate}</div>
      <button>Add to cart</button>
    </div>
  );
}
export default ProductDetails;
