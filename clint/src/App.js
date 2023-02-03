import React from "react";
import ProductPost from "./Pages/ProductPost";
import Products from "./Pages/Products";
import {  Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Header from "./Components/Navbar";
import Signin from "./Components/Signin";

const App = () => {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Signin/>}></Route>
          <Route path="/" element={<Products />} />
          <Route path="/post" element={<ProductPost />} />
        </Routes>
      
    </div>
  );
};
export default App;
