import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../../assets/cross_icon.png";

const ListProduct = () => {
  const API_URL = "https://backend-pink-tau.vercel.app";

  const [allproducts, setAllproducts] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await fetch(`${API_URL}/allproducts`);
        const data = await res.json();
        setAllproducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    try {
      await fetch(`${API_URL}/removeproduct`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });

      // Refresh list after removing
      const res = await fetch(`${API_URL}/allproducts`);
      const data = await res.json();
      setAllproducts(data);
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  return (
    <div className="list-product">
      <h1>All Products List</h1>

      <div className="listproduct-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className="listproduct-allproducts">
        <hr />

        {allproducts.map((product) => (
          <React.Fragment key={product._id}>
            <div className="listproduct-format-main listproduct-format">
              <img
                src={product.image}
                alt={product.name}
                className="listproduct-product-icon"
              />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img
                onClick={() => remove_product(product.id)}
                className="listproduct-remove-icon"
                src={cross_icon}
                alt="Remove"
              />
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
