import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import cors from "cors";
import userRouter from "./models/routers/userRouter.js";
import productRouter from "./models/routers/productRouter.js";
import dotenv from "dotenv";
// mongoose.set("useCreateIndex", true);
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const ConnectDb = (() => {
  try {
    const Result = mongoose.connect(
      process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/amit_pro_store",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
  }
})();

app.use(cors());
// app.get("/api/products/:id", (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "Product Not Found" });
//   }
// });
// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.get("/", (req, res) => {
  res.send("server is ready");
});

app.use((err, req, res, next) => {
  let message  = err.message
  if(err.message.includes("E11000")){
    message = "Email is allready exist"
  }
  res.status(500).send({ message: message });
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
