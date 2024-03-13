const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const userRoute = require("./routes/userRoute");

const app = express();
const port = process.env.PORT || 7000;
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.get("/", (req, res) => {
  res.send("Api Working");
});

mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/user", userRoute);

app.listen(port, () => {
  connectDB();
  console.log(`listening on ${port}`);
});
