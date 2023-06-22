import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import conversationRoute from "./routes/conversation.route.js";
import gigRoute from "./routes/gig.route.js";
import messageRoute from "./routes/message.route.js";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.route.js";
import authRoute from "./routes/auth.route.js";


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

};

app.use(express.json());
app.use(cookieParser()); //to authorize n authenticate users

app.use("/api/auth",authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs",gigRoute);
app.use("/api/messages",messageRoute);
app.use("/api/conversations",conversationRoute);
app.use("/api/orders",orderRoute);
app.use("/api/reviews",reviewRoute);

//error handling middleware
app.use((err,req,res,next) =>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong !"

    return res.status(errorStatus).send(errorMessage);
});

app.listen(8800, ()=>{
    connect();
    console.log("Backend Server is running");
});
