import { useLocation, useOutletContext } from "react-router-dom";
import { useState } from "react";
import AddToCart from "../components/AddToCart";
function ProductDetails() {
  const { addToCart } = useOutletContext();
  const location = useLocation();
  const [product, setProduct] = useState(location.state?.p || null);

  return (
    <div className="productDetails">
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
      <AddToCart addToCart={addToCart} product={product}/>
    </div>
  );
}
export default ProductDetails;
