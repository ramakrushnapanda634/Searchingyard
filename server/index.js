const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/ProductRoutes");
const userRouter=require("./routes/UserRoutes");
const connection = require("./connection/db");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

 app.use("/api/product", productRouter);
app.use("/api",userRouter)
app.listen(8080, async () => {
  try {
    await connection;
    console.log("successfully connected to DB");
  } catch (error) {
    console.log("Failed to connect to DB");
  }
});
