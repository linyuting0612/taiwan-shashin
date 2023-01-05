import http from 'http';
import express from 'express';
import dotenv from 'dotenv-defaults';
import mongoose from 'mongoose';
import mongo from './mongo.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoute from "./routes/userRoute.js";
import photoRoute from "./routes/photoRoute.js";
import errorHandler from "./middlewares/errorMiddleware.js";
import cookieParser from 'cookie-parser';
import path from 'path';

mongo.connect();

const app = express();
const server = http.createServer(app);
const db = mongoose.connection;
mongoose.set('strictQuery', true);

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
if(process.env.NODE_ENV === 'development') {
  app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
  }));
}


import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes Middleware
app.use("/api/users", userRoute);
app.use("/api/photos", photoRoute);

// Routes
// app.get("/", (req, res) => {
//     res.send("Home Page");
// });
if(process.env.NODE_ENV === 'production') {
  const __dirname2 = path.resolve();
  app.use(express.static(path.join(__dirname2, "../frontend", "build")));
}


// Error Middleware
app.use(errorHandler);

// CSP
const csp = "default-src 'self' 'unsafe-inline'; style-src 'self' https://fonts.googleapis.com/* 'unsafe-inline'; img-src 'self' https://res.cloudinary.com/* 'unsafe-inline'; font-src 'self' https://fonts.googleapis.com/ 'unsafe-inline';";

app.use(function(req, res, next) {
  res.setHeader('Content-Security-Policy', csp);
  next();
});


const PORT = process.env.PORT || 4096;
server.listen(PORT, () => {console.log(`App listening on port ${PORT}!`)})
