import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

//dotenv***********
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//middlewares***********
app.use(express.json());//use express.json() to parse incoming requests 
app.use(express.urlencoded({ extended: true }));//use express.urlencoded() to parse incoming requests with urlencoded payloads
app.use(cookieParser());//use cookieParser() to parse incoming requests with cookies


//routes***************
app.use("/api/auth", authRoutes); 


//starting the server**********
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});