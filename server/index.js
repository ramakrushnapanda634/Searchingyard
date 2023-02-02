const express = require("express");
require("dotenv").config();
const cors = require("cors");
const productRouter = require("./routes/ProductRoutes");
const userRouter=require("./routes/UserRoutes");
const connection = require("./connection/db");
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

 app.use("/api/product", productRouter);
app.use("/api",userRouter)
app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`Server start at port no ${PORT}`);
  } catch (error) {
    console.log("Failed to connect to DB");
  }
});
