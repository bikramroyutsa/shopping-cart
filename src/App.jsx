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

    setCartItems([...tempCart]);
  }
  function removeFromCart(existingProduct) {
    const tempCart = cartItems.filter((p) => p.item.id !== existingProduct.id);
    setCartItems([...tempCart]);
  }
  function decrementCartItem(existingProduct) {
    for (const p of cartItems) {
      if (p.item.id == existingProduct.id) {
        if (p.count == 1) {
          removeFromCart(existingProduct);
          break;
        } else {
          p.count -= 1;
          setCartItems([...cartItems]);
          break;
        }
      }
    }
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
    let n = 0;
    cartItems.forEach((p) => {
      n = n + p.count;
    });
    setCartCount(n);
  }, [cartItems]);
  return (
    <>
      <Header products={products} cartCount={cartCount} />
      <Outlet
        context={{
          products,
          cartItems,
          addToCart,
          removeFromCart,
          decrementCartItem,
        }}
      />
    </>
  );
}

export default App;
