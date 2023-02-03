import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Header = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link className={styles.link} to="/">
          SearchingYard
        </Link>
      </div>

      <div className={styles.user}>
        <Link to="/signup" className={styles.link}>
          Login/Signup
        </Link>
      </div>
    </div>
  );
};

export default Header;
