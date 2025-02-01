import Showcase from "../components/Showcase";
import { useOutletContext } from "react-router-dom";
function Store() {
  const { products, cartItems, addToCart } = useOutletContext();
  return (
    <>
      <Showcase products={products} addToCart={addToCart} />
    </>
  );
}
export default Store;
