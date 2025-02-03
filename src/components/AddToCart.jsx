import { useState } from "react";
function AddToCart({ addToCart, product }) {
  const [pCount, setPcount] = useState(1);
  function handleIncrease() {
    setPcount(pCount + 1);
  }
  function handleDecrease() {
    if (pCount != 1) {
      setPcount(pCount - 1);
    }
  }
  return (
    <div className="addToCartContainer">
      <div className="increaseDecrease">
        <button className="btnDecrease" onClick={handleDecrease}>
          -
        </button>
        <div className="pCount">{pCount}</div>
        <button className="btnIncrease" onClick={handleIncrease}>
          +
        </button>
      </div>
      <button
        onClick={() => {
          addToCart(product, pCount);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
export default AddToCart;
