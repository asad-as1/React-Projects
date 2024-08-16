const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config();


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