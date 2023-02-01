const mongoose = require("mongoose");
const db = mongoose.connection;

mongoose.connect(
  "mongodb+srv://Rama:Rama@cluster0.o03sdpa.mongodb.net/Fruit?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});
module.exports = db;
