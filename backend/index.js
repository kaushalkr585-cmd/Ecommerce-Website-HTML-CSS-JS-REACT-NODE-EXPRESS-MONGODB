const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const port = process.env.PORT || 4000;

/* ================= MIDDLEWARE ================= */

app.use(express.json());
app.use(cors());

/* ================= DATABASE CONNECTION ================= */

// Use connection pooling for serverless
let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(
      "mongodb+srv://kaushalkr585_db_user:cNIC6cXEX4ButMK5@cluster0.lvrjh2f.mongodb.net/ecommerce",
      {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      }
    );
    isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection error:", error);
    throw error;
  }
};

/* ================= TEST API ================= */

app.get("/", (req, res) => {
  res.send("Express App is Running");
});

/* ================= IMAGE UPLOAD ================= */

// Use memory storage for Vercel (filesystem is read-only)
const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

app.post("/upload", upload.single("product"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No file uploaded",
    });
  }

  // For serverless, you'll need to use a cloud storage service (Cloudinary, AWS S3, etc.)
  // This is a placeholder - file upload won't persist on Vercel without external storage
  res.json({
    success: true,
    message: "File upload requires external storage service (Cloudinary/S3) on Vercel",
    image_url: `placeholder_${Date.now()}${path.extname(req.file.originalname)}`,
  });
});

/* ================= PRODUCT SCHEMA ================= */

const Product = mongoose.model("Product", {
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
});

/* ================= USER SCHEMA ================= */

const Users = mongoose.model("Users", {
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  cartData: { type: Object, default: {} },
  date: { type: Date, default: Date.now },
});

/* ================= ADD PRODUCT ================= */

app.post("/addproduct", async (req, res) => {
  try {
    await connectDB();
    
    const lastProduct = await Product.findOne().sort({ id: -1 });
    const id = lastProduct ? lastProduct.id + 1 : 1;

    const product = new Product({
      id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    await product.save();

    res.json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

/* ================= GET ALL PRODUCTS ================= */

app.get("/allproducts", async (req, res) => {
  try {
    await connectDB();
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ================= DELETE PRODUCT ================= */

app.post("/removeproduct", async (req, res) => {
  try {
    await connectDB();
    await Product.findOneAndDelete({ id: req.body.id });
    res.json({
      success: true,
      message: "Product removed successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ================= NEW COLLECTION ================= */

app.get("/newcollection", async (req, res) => {
  try {
    await connectDB();
    const products = await Product.find().sort({ date: -1 }).limit(8);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ================= POPULAR IN WOMEN ================= */

app.get("/popularinwomen", async (req, res) => {
  try {
    await connectDB();
    const products = await Product.find({ category: "women" });
    res.json(products.slice(0, 4));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ================= AUTH MIDDLEWARE ================= */

const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .json({ errors: "Please authenticate using valid token" });
  }

  try {
    const data = jwt.verify(token, "secret_ecom");
    req.user = data.user;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ errors: "Please authenticate using a valid token" });
  }
};

/* ================= ADD TO CART ================= */

app.post("/addtocart", fetchUser, async (req, res) => {
  try {
    await connectDB();
    const { itemId } = req.body;

    const userData = await Users.findOne({ _id: req.user.id });
    if (!userData) {
      return res.status(404).json({ success: false });
    }

    if (!userData.cartData[itemId]) {
      userData.cartData[itemId] = 0;
    }

    userData.cartData[itemId] += 1;

    await Users.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );

    res.json({
      success: true,
      cartData: userData.cartData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

/* ================= REMOVE FROM CART ================= */

app.post("/removefromcart", fetchUser, async (req, res) => {
  try {
    await connectDB();
    const { itemId } = req.body;

    const userData = await Users.findOne({ _id: req.user.id });
    if (!userData) {
      return res.status(404).json({ success: false });
    }

    if (!userData.cartData[itemId]) {
      userData.cartData[itemId] = 0;
    }

    userData.cartData[itemId] = Math.max(
      userData.cartData[itemId] - 1,
      0
    );

    await Users.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );

    res.json({
      success: true,
      cartData: userData.cartData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

/* ================= GET CART ================= */

app.post("/getcart", fetchUser, async (req, res) => {
  try {
    await connectDB();
    const userData = await Users.findOne({ _id: req.user.id });
    if (!userData) {
      return res.json({});
    }
    res.json(userData.cartData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ================= USER SIGNUP ================= */

app.post("/signup", async (req, res) => {
  try {
    await connectDB();
    const check = await Users.findOne({ email: req.body.email });
    if (check) {
      return res.status(400).json({
        success: false,
        errors: "Existing user found with same email address",
      });
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new Users({
      name: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      cartData: {},
    });

    await user.save();

    const token = jwt.sign({ user: { id: user.id } }, "secret_ecom");

    res.json({
      success: true,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

/* ================= USER LOGIN ================= */

app.post("/login", async (req, res) => {
  try {
    await connectDB();
    const user = await Users.findOne({ email: req.body.email });

    if (!user) {
      return res.json({
        success: false,
        errors: "Wrong Email Id",
      });
    }

    const passCompare = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passCompare) {
      return res.json({
        success: false,
        errors: "Wrong Password",
      });
    }

    const token = jwt.sign({ user: { id: user.id } }, "secret_ecom");

    res.json({
      success: true,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

/* ================= SERVER ================= */

// Only start server in development
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log("Server Running on Port " + port);
  });
}

// Export for Vercel
module.exports = app;