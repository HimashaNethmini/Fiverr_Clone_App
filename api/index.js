import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';


const app =express();
dotenv.config();
// db connection
const connect = async() =>{
try{
    await mongoose.connect(process.env.MONGO);
console.log("Connected to Mongo DB");
}catch (error) {
    console.log(error);
}

}







app.listen(8800, ()=>{
    connect();
    console.log("Backend Server is running");
})
