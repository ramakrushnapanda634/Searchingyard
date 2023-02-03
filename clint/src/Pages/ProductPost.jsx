import React, { useState } from "react";
import axios from "axios";
import styles from "./Post.module.css";
import { useNavigate } from "react-router-dom";
const ProductPost = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name: name,
      price: price,
      description: description,
      category: category,

      image: image,
    };
    axios
      .post("https://fruit-store-app-rama.onrender.com/api/product", product)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
    setName("");
    setPrice("");
    setDescription("");
    setCategory("");
    setImage("");
  };

  return (
    <div className={styles.formContainer}>
      <h1>FruitsPosting</h1>
      <form>
        <input
          type="text"
          placeholder="Fruits Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="Fruits Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Fruits Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Fruits Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Fruits Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductPost;
