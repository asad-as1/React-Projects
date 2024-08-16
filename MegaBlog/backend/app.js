const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));


// console.log(process.env.ATLASDB_URL);
const URI = process.env.ATLASDB_URL;

const connect = async () => {
  try {
    const res = await mongoose.connect(URI)
    console.log("database connected");
  } catch (error) {
    console.log("error while connecting to the database", error);
  }
};
connect();

// Route for testing
app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(5000, () => {
  console.log('Server is running on port 3000');
})



// routes
// const userRouter = require("./router/user.routes")
// const postRouter = require("./router/post.routes")
// app.use("/api/user", userRouter)
// app.use("/api/post", postRouter)

module.exports = app;