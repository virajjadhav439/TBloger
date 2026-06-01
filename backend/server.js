const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello From Backend",
  });
});

app.use("/api/blogs", blogRoutes);

const port = 3000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`The Server is Running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
