require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connectDB");

// Controllers
const productRouter = require("./routes/products");

// Error checkers
const notFound = require("./middleware/notFound");
const errorMiddleware = require("./middleware/errorHandler");

const app = express();

// Middleware
app.use(express.json());

// Routes
// app.get("/", (req, res) => {});

app.use("/api/products", productRouter);

// products route
app.use(notFound);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    // conntect To db
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is up on ${PORT} port`));
  } catch (error) {
    console.log(error);
  }
};

start();
