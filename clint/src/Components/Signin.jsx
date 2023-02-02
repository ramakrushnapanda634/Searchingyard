import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passhow, setPassShow] = useState(false);
  const handleSubmit = () => {
    //http://localhost:8080/api/login
    console.log(email, password);
    axios
      .post("https://fruit-app-rama.onrender.com/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);

        if (res.data.code === 500) {
          alert("User Not Found");
        }
        if (res.data.code === 404) {
          alert("Password is wrong");
        }
        if (res.data.code === 200) {
          navigate("/");
          localStorage.setItem("TOKEN", res.data.token);
          localStorage.setItem("EMAIL", res.data.email);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className={styles.center}> SIGNIN </h1>
      <div className={styles.outcard}>
        Email
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          className={styles.input}
          type="email"
        />{" "}
        <br /> <br />
        <span>Password</span>
        <div className={styles.two}>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className={styles.input}
            type={!passhow ? "password" : "text"}
            name="password"
          />
          <p className="showpass" onClick={() => setPassShow(!passhow)}>
            {!passhow ? "Show" : "Hide"}
          </p>
        </div>
        <br /> <br />
        <button onClick={handleSubmit} className={styles.btns}>
          {" "}
          SUBMIT{" "}
        </button>
        <Link
          style={{ textAlign: "center", display: "block", marginTop: "5px" }}
          to={"/signup"}
        >
          {" "}
          SIGN UP{" "}
        </Link>
      </div>
    </>
  );
}

export default Signin;
