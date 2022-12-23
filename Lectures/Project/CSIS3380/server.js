import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import billRouter from "./routes/billsRoutes.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/possystem")
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   res.send("Live");
// });

app.use("/api/products/", productRouter);
app.use("/api/users/", userRouter);
app.use("/api/bills/", billRouter);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
