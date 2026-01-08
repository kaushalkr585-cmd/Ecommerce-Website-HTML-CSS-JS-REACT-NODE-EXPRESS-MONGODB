import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    old_price: "",
    new_price: "",
    category: "women",
    image: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const submitHandler = async () => {
    try {
      if (!image) {
        alert("Please select an image");
        return;
      }

      
      const formData = new FormData();
      formData.append("product", image);

      const uploadResp = await fetch("http://localhost:4000/upload", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const uploadData = await uploadResp.json();

      if (!uploadData.success) {
        alert("Image upload failed");
        return;
      }

      
      const finalProduct = {
        ...product,
        image: uploadData.image_url,
      };

      
      const addResp = await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalProduct),
      });

      const addData = await addResp.json();

      addData.success ? alert("Product Added") : alert("Failed to add product");
    } catch (error) {
      console.error("Error:", error);
      alert("Server error");
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input type="text" name="name" value={product.name} onChange={changeHandler} />
      </div>

      <div className="addproduct-price">
        <input type="text" name="old_price" placeholder="Price" value={product.old_price} onChange={changeHandler} />
        <input type="text" name="new_price" placeholder="Offer Price" value={product.new_price} onChange={changeHandler} />
      </div>

      <select name="category" value={product.category} onChange={changeHandler}>
        <option value="women">Women</option>
        <option value="men">Men</option>
        <option value="kid">Kid</option>
      </select>

      <label htmlFor="file-input">
        <img src={image ? URL.createObjectURL(image) : upload_area} className="addproduct-thumbnail-img" alt="" />
      </label>
      <input id="file-input" type="file" hidden onChange={imageHandler} />

      <button onClick={submitHandler}>ADD</button>
    </div>
  );
};

export default AddProduct;
