import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  function addToCart(newProduct) {
    let tempCart = cartItems;
    let exists = false;
    for (const p of tempCart) {
      if (parseInt(p.item.id) == parseInt(newProduct.id)) {
        p.count += 1;
        exists = true;
        break;
      }
    }
    if (!exists) {
      tempCart = [...tempCart, { item: newProduct, count: 1 }];
    }
    let n = 0;
    tempCart.forEach((p) => {
      n = n + p.count;
    });
    setCartCount(n);
    setCartItems(tempCart);
  }
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?sort=desc")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((err) => console.error("Error fetching image:", err));
  }, []);
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  return (
    <>
      <Header products={products} cartCount={cartCount} />
      <Outlet context={{ products, cartItems, addToCart }} />
    </>
  );
}

export default App;
