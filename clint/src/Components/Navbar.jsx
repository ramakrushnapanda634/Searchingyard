import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Link className={styles.link} to="/">
          SearchingYard
        </Link>
      </div>

      <div>
        <Link className={styles.link} to="/signup">
          Authentication
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
