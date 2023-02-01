const express = require("express");
const router = express.Router();
const UserModel=require("../model/UserModel")
const jwt = require("jsonwebtoken");
router.post("/signup",async(req,res)=>{
  const {  email, password } = req.body;

  if (!email) {
    return res.send({ code: 400, message: "Email Required" });
  } else if (!password) {
    return res.send({ code: 400, message: "Password Required" });
  } else {
    const newUser = await new UserModel({
     
      email: email,
      password: password,
    });
    const isSaved = newUser.save();
    if (isSaved) {
      return res.send({ code: 200, message: "SignUp Success" });
    } else {
      return res.send({ code: 500, message: "Server Err...." });
    }
  }
})
router.post("/login",async(req,res)=>{
      const { email, password } = req.body;
      if (!email) {
        return res.send({ code: 400, message: "Email Required" });
      } else if (!password) {
        return res.send({ code: 400, message: "Password Required" });
      } else {
        const isEmailExist = await UserModel.findOne({ email: email });

        if (isEmailExist) {
          console.log(isEmailExist.password, "user");
          if (isEmailExist.password === req.body.password) {
            const token = jwt.sign(
              {
                name: isEmailExist.name,
                email: isEmailExist.email,
                password: isEmailExist.password,
              },
              "SECRET",
              { expiresIn: "7 days" }
            );

            return res.send({
              code: 200,
              message: "Login Successfully",
              token: token,
              email: email,
            });
          } else {
            return res.send({ code: 400, message: "Password Wrong" });
          }
        } else {
          return res.send({ code: 404, meassage: "Email Not Found" });
        }
      }
})
module.exports = router;