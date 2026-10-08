const express = require("express");
require('dotenv').config();
const connectDb = require("./db");
const app = express()

const PORT = process.env.PORT || 3000
connectDb()
app.listen(PORT,()=>{
    console.log("Server Started")
})