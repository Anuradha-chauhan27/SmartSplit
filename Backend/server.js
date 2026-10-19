const express = require("express");
require("dotenv").config();
console.log("Mongo URI loaded:", !!process.env.MONGO_URI);
const cors = require("cors");
const path = require("path");
const app = express();
const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");






const connectDb = require("./config/db");
connectDb();



app.use(express.json())

app.use("/uploads", express.static(path.join(__dirname,"uploads")));

app.use(cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);
app.use("/api/income", incomeRoutes);
app.use("/api/expense", expenseRoutes);
app.use("/api/dashboard", dashboardRoutes);




const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});