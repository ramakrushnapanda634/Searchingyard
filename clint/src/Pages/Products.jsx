import React, { useState, useEffect } from "react";
import styles from "./Product.module.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/product")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filteredProducts = products
    .filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    })
    .filter((product) => {
      if (filter === "") {
        return product;
      } else {
        return product.category === filter;
      }
    });
  const ascendingPrice = () => {
    let result = [...products].sort((a, b) => a.price - b.price);
    setProducts(result);
  };
  const descendingPrice = () => {
    let result = [...products].sort((a, b) => b.price - a.price);
    setProducts(result);
  };
  const ascendingName = () => {
    let result = [...products].sort((a, b) => a.name.localeCompare(b.name));
    setProducts(result);
  };
  const descendingName = () => {
    let result = [...products].sort((a, b) => b.name.localeCompare(a.name));
    setProducts(result);
  };

  const handleClick = () => {
    navigate("/post");
  };

  return (
    <div className={styles.ProductsContainer}>
      <div className={styles.searchContainer}>
        <h1>Fruits</h1>
        <button className={styles.btn} onClick={handleClick}>
          AddFruit
        </button>
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={handleSearch}
        />
        <h3>Filter By Category</h3>
        <select value={filter} onChange={handleFilter}>
          <option value="">All</option>
          <option value="fleshy">Fleshy</option>
          <option value="dry">Dry</option>
        </select>
        <h3>Sort By Price</h3>
        <button onClick={ascendingPrice} className={styles.btn}>
          Ascending
        </button>
        <button
          style={{ margin: "10px" }}
          onClick={descendingPrice}
          className={styles.btn}
        >
          Descending
        </button>
        <br />
        <h3>Sort By Name</h3>
        <button onClick={ascendingName} className={styles.btn}>
          Ascending
        </button>
        <button
          style={{ margin: "10px" }}
          onClick={descendingName}
          className={styles.btn}
        >
          Descending
        </button>
      </div>
      <div className={styles.Container}>
        {filteredProducts.map((product) => (
          <div className={styles.card}>
            <div className={styles.CardContainer} key={product._id}>
              <h4>Name:{product.name}</h4>
              <h5>
                Price: <s>₹{product.price}</s>
              </h5>
              <h5>Description:{product.description}</h5>
              <h4>Category: {product.category}</h4>
              <h5>Rating:{product.rating}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
