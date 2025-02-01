import { useOutletContext } from "react-router-dom";

function Cart() {
  const { cartItems } = useOutletContext();
  let total = 0;
  cartItems.forEach((p) => {
    total = total + p.item.price * p.count;
  });
  return (
    <>
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
            <div className="cartItemCount">{p.count}</div>
            <div className="cartItemPrice">
              {p.item.price} * {p.count} = {p.item.price * p.count}
            </div>
          </div>
        );
      })}
      <h2>total = {total}</h2>
      <button>Checkout</button>
    </>
  );
}
export default Cart;
