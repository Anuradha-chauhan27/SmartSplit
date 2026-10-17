const express = require("express");
require("dotenv").config();
console.log("Mongo URI loaded:", !!process.env.MONGO_URI);
const cors = require("cors");
const path = require("path");
const app = express();
const authRoutes = require("./routes/authRoutes");



const connectDb = require("./config/db");
connectDb();



app.use(express.json())

app.use(cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization"],
}));

app.use("/api/v1/auth", authRoutes);
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});