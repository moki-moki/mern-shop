require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connectDB");

// Controllers
const productRouter = require("./routes/products");
const authRoutes = require("./routes/authRoutes");

// Error checkers
const notFound = require("./middleware/notFound");
const errorMiddleware = require("./middleware/errorHandler");

const path = require("path");
const multer = require("multer");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

// upload
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use(helmet());
app.use(morgan("common"));

// func for uploading
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("file was uploaded");
  } catch (error) {
    console.log(error);
  }
});

// Middleware
app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/auth", authRoutes);

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
