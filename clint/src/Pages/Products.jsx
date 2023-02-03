import React, { useState, useEffect } from "react";
import styles from "./Product.module.css";
import { TbSortAscending2, TbSortDescending2 } from "react-icons/tb";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const navigate = useNavigate();
  //http://localhost:8080/api/product
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
  const handleCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find((item) => item._id === product._id);
    if (item) {
      item.quantity++;
    } else {
      product.quantity = 1;
      cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

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
        <h1>Fruits Store </h1>
        <button className={styles.btnn} onClick={handleClick}>
          AddFruit
        </button>
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={handleSearch}
        />
      </div>
     

      <div className={styles.main}>
        <div className={styles.category}>
          <select
            value={filter}
            className={styles.option}
            onChange={handleFilter}
          >
            <option value="">--SelectCategory</option>

            <option value="Fleshy">Fleshy</option>
            <option value="Dry">Dry</option>
          </select>
        </div>
        <div className={styles.price}>
          <h3 className={styles.h3}> Price:-</h3>
          <button onClick={ascendingPrice} className={styles.btn}>
            <TbSortAscending2 />
          </button>
          <button onClick={descendingPrice} className={styles.btn}>
            <TbSortDescending2 />
          </button>
        </div>

        <div className={styles.name}>
          <h3 className={styles.h3}> Name:-</h3>
          <button onClick={ascendingName} className={styles.btn}>
            <TbSortAscending2 />
          </button>
          <button onClick={descendingName} className={styles.btn}>
            <TbSortDescending2 />
          </button>
        </div>
      </div>

      <br />
      <br />
      <div className={styles.Container}>
        {filteredProducts.map((product) => (
          // <div className={styles.card}>

          // </div>
          <div className={styles.CardContainer} key={product._id}>
            <div className={styles.imgdiv}>
              <img src={product.image} alt="fruits" className={styles.img} />
            </div>
            <div className={styles.pricename}>
              <h4>{product.name}</h4>
              <h5>$ {product.price}/-</h5>
            </div>
            <div className={styles.ratingcategory}>
              <h4> {product.category}</h4>
              <h5>⭐⭐⭐⭐⭐</h5>
            </div>
            <h5>{product.description}</h5>

            <button onClick={() => handleCart(product)} className={styles.btns}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
