require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes")

const app = express();

//Middleware to handle CORS
app.use(
  cors({
    origin: "*",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["content-type", "Authorization"],
  })
);

// connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes here
app.use("/api/auth", authRoutes)

// App start here
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
