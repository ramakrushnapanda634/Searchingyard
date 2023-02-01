const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/ProductRoutes");
const connection = require("./connection/db");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

 app.use("/api", productRouter);

app.listen(8000, async () => {
  try {
    await connection;
    console.log("successfully connected to DB");
  } catch (error) {
    console.log("Failed to connect");
  }
});
