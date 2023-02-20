import express from "express";
import dotenv from "dotenv";
import assessmentRoutes from "./api/route.js";
import { errorHandler } from "./middlewares/error.js";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const port = process.env.PORT || 5000;
const app = express();

app.use(
  cors({
    origin: ["*", "https://azmoon.onrender.com"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/assessment", assessmentRoutes);

app.use(errorHandler);
app.listen(port, () => console.log(`server started on port ${port}`));
