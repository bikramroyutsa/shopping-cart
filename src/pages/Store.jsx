import Showcase from "../components/Showcase";
import { useOutletContext } from "react-router-dom";
function Store() {
  const { products } = useOutletContext();
  return (
    <>
      <Showcase products={products} />
    </>
  );
}
export default Store;
