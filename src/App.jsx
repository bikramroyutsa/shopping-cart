import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?sort=desc")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        console.log("fetching");
      })
      .catch((err) => console.error("Error fetching image:", err));
  }, []);
  return (
    <>
      <Home products={products} />

    </>
  );
}

export default App;
