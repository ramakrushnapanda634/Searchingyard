import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    //http://localhost:8080/api/signup
    console.log(email, password);
    axios
      .post("http://localhost:8080/api/signup", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        if (email === "") {
          toast.error("Enter Your Email");
        } else if (!email.includes("@")) {
          toast.error("Enter Valid Email");
        } else if (password === "") {
          toast.error("Enter Your Password");
        } else if (password.length < 6) {
          toast.error("password length minimum 6 character");
        } else if (res.data.code === 200) {
          navigate("/login");
        } else {
          toast.error("Signup Error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1 className={styles.center}> SIGNUP </h1>
      <div className={styles.outcard}>
        <span>Email</span>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          className={styles.input}
          type="email"
          placeholder="Enter Email"
          required
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
            type="text"
            name="password"
            placeholder="Enter Password"
            required
          />
        </div>
        <br />
        <button onClick={handleSubmit} className={styles.btns}>
          {" "}
          SUBMIT{" "}
        </button>
        <Link
          style={{
            textAlign: "center",
            display: "block",
            marginTop: "5px",
            textDecoration: "none",
          }}
          to={"/login"}
        >
          {" "}
          SIGN IN{" "}
        </Link>
        <ToastContainer position="top-center" />
      </div>
    </>
  );
}

export default Signup;
