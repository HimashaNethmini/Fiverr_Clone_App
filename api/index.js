import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoute from "./routes/user.route.js";
import ConversationRoute from "./routes/conversation.route.js";
import GigRoute from "./routes/gig.route.js";
import MessageRoute from "./routes/message.route.js";
import OrderRoute from "./routes/order.route.js";
import ReviewRoute from "./routes/review.route.js";
import AuthRoute from "./routes/auth.route.js";


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
app.use("/api/auth",AuthRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs",GigRoute);
app.use("/api/messages",MessageRoute);
app.use("/api/conversations",ConversationRoute);
app.use("/api/orders",OrderRoute);
app.use("/api/reviews",ReviewRoute);







app.listen(8800, ()=>{
    connect();
    console.log("Backend Server is running");
})
