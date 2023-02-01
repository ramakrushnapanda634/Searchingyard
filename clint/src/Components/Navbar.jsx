import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"
//import "../App.css";

const Navbar = () => {
  // const navigate = useNavigate();
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
