import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
function App() {
  const [products, setProducts] = useState([]);
  const [num, setNum] = useState(1);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?sort=desc")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((err) => console.error("Error fetching image:", err));
  }, []);
  return (
    <>
      {/* <Home products={products} /> */}
      <Header products={products} />
      <Outlet context={{products}} />
    </>
  );
}

export default App;
