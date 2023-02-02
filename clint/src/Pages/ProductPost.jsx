import React, { useState } from "react";
import axios from "axios";
import styles from "./Post.module.css";
import { useNavigate } from "react-router-dom";
const ProductPost = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name: name,
      price: price,
      description: description,
      category: category,
      rating: rating,
    };
    axios
      .post("http://localhost:8080/api/product", product)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  return (
    <div className={styles.formContainer}>
      <form>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="text"
          placeholder="Product Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductPost;
