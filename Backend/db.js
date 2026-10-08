const mongoose = require("mongoose")
const mongoURI = process.env.MONGO_URI

const connectDb = async()=>{
    try{
        await mongoose.connect(mongoURI)
        console.log('MongoDB connected successfully!');
    }
    catch(error){
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
}
module.exports = connectDb