import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import cors from "cors";
import userRouter from "./models/routers/userRouter.js";
// mongoose.set("useCreateIndex", true);
const app = express();


const ConnectDb=  (() => {
  try {
    const Result = mongoose.connect("mongodb://127.0.0.1:27017/amit_pro_store",{ useNewUrlParser: true, useUnifiedTopology: true })
    console.log("DB Connected")
  } catch (err) {
    console.log(err)
  }
})()



app.use(cors());
app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});
app.get("/api/products", (req, res) => {
  res.send(data.products);
});
app.use("/api/users", userRouter);
app.get("/", (req, res) => {
  res.send("server is ready");
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
