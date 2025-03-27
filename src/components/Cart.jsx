import { useOutletContext } from "react-router-dom";

function Cart() {
  const { cartItems, addToCart, removeFromCart, decrementCartItem } =
    useOutletContext();
  let total = 0;
  cartItems.forEach((p) => {
    total = total + p.item.price * p.count;
  });
  return (
    <div className="cart">
      <div className="cartItemContainer">
        {cartItems.map((p) => {
          return (
            <div className="cartItem" key={p.item.id}>
              <div className="cartItemDetails">
                <div className="cartItemImgContainer">
                  <img
                    src={p.item.image}
                    alt={p.item.title}
                    className="productImg"
                  />
                </div>
                <div className="cartItemTitle">{p.item.title}</div>
              </div>
              <div className="cartItemCount">
                <button
                  className="incrementCount"
                  onClick={() => {
                    addToCart(p.item);
                  }}
                >
                  +
                </button>
                {p.count}
                <button
                  className="decrementCount"
                  onClick={() => {
                    decrementCartItem(p.item);
                  }}
                >
                  -
                </button>
                <button
                  className="removeItem"
                  onClick={() => {
                    removeFromCart(p.item);
                  }}
                >
                  Remove
                </button>
              </div>

              <div className="cartItemPrice">
                {p.item.price} * {p.count} = {p.item.price * p.count}
              </div>
            </div>
          );
        })}
      </div>
      <h2>total = {total}</h2>
      <button className="btnCheckout">Checkout</button>
    </div>
  );
}
export default Cart;
