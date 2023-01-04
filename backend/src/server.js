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
// app.use(cors({
//     origin: ["http://localhost:3000"],
//     credentials: true
// }));

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
const __dirname2 = path.resolve();
app.use(express.static(path.join(__dirname2, "../frontend", "build")));

// Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 4096;
server.listen(PORT, () => {console.log(`App listening on port ${PORT}!`)})
