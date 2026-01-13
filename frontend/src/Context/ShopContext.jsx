import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const fetchProductsAndCart = async () => {
      try {
        const productRes = await fetch("import.meta.env.VITE_API_URL
/allproducts");
        const products = await productRes.json();

        setAll_Product(products);

        let defaultCart = {};
        products.forEach((product) => {
          defaultCart[product.id] = 0;
        });

        if (localStorage.getItem("auth-token")) {
          const cartRes = await fetch("import.meta.env.VITE_API_URL
/getcart", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("auth-token"),
            },
          });

          const serverCart = await cartRes.json();
          setCartItems({ ...defaultCart, ...serverCart });
        } else {
          setCartItems(defaultCart);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductsAndCart();
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));

    if (localStorage.getItem("auth-token")) {
      fetch("import.meta.env.VITE_API_URL
/addtocart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ itemId }),
      })
        .then((res) => res.json())
        .catch((err) => console.error(err));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));

    if (localStorage.getItem("auth-token")) {
      fetch("import.meta.env.VITE_API_URL
/removefromcart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ itemId }),
      })
        .then((res) => res.json())
        .catch((err) => console.error(err));
    }
  };

  const getTotalCartAmount = () => {
    let total = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const product = all_product.find(
          (p) => p.id === Number(item)
        );
        if (product) {
          total += product.new_price * cartItems[item];
        }
      }
    }
    return total;
  };

  const getTotalCartItems = () => {
    let total = 0;
    for (const item in cartItems) {
      total += cartItems[item];
    }
    return total;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
