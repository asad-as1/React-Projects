const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Route for testing
app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(3000, () => {
    console.log(`Server is listening on port 5000`);
});

// routes
// const userRouter = require("./router/user.routes")
// const postRouter = require("./router/post.routes")
// app.use("/api/user", userRouter)
// app.use("/api/post", postRouter)

// module.exports = app;
