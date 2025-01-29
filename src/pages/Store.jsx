import Header from "../components/Header";
import Showcase from "../components/Showcase";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
function Store() {
  const location = useLocation();
  const [products, setProducts] = useState(location.state?.products || []); // Use state if available
  useEffect(() => {
    if (products.length === 0) {
      fetch("https://fakestoreapi.com/products?sort=desc")
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
          // console.log("fetching");
        })
        .catch((err) => console.error("Error fetching products:", err));
    }
  }, []);
  return (
    <>
      <Header products={products} />
      <Showcase products={products} />
      {console.log(location)}
    </>
  );
}
export default Store;
