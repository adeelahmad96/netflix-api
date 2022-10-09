import { cors } from "cors-ts";
import express from "express";
import mongoose from 'mongoose';
import config from './config';
import { api } from "./routes/api";
import dotenv from "dotenv";

dotenv.config();

// Connect mongodb
(async () => {
  await mongoose.connect(process.env.DATABASE_URL as any);
})();

const app = express();

app.use(cors());

// Add middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

api(app);

export default app;
