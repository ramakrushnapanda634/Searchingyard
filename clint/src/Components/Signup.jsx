import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css"
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const [passhow, setPassShow] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log(email, password);
    axios
      .post("http://localhost:8080/api/signup", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 200) {
          alert("Signup success.");
          navigate("/login");
        } else {
          alert("Error.");
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
        <br />
        <button onClick={handleSubmit} className={styles.btns}>
          {" "}
          SUBMIT{" "}
        </button>
        <Link
          style={{ textAlign: "center", display: "block", marginTop: "5px" }}
          to={"/login"}
        >
          {" "}
          SIGN IN{" "}
        </Link>
      </div>
    </>
  );
}

export default Signup;
