import express from "express";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import {v2 as cloudinary} from "cloudinary";
//dotenv***********
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true, // true if your site uses HTTPS
  redirect_secure: true // true if you're running your site over HTTPS
});

const app = express();
const PORT = process.env.PORT || 5000;

//middlewares***********
app.use(express.json());//use express.json() to parse incoming requests 
app.use(express.urlencoded({ extended: true }));//use express.urlencoded() to parse incoming requests with urlencoded payloads
app.use(cookieParser());//use cookieParser() to parse incoming requests with cookies


//routes***************
app.use("/api/auth", authRoutes); 
app.use("/api/users", userRoutes); 


//starting the server**********
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});