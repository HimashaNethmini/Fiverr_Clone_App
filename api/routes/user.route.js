import express from "express";
import { deleteUser, getUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";


//req-what comes from client and res- what we send to them(response)
const router = express.Router();

//this will check middleware first
router.delete("/:id", verifyToken, deleteUser );
router.get ("/:id", getUser)


export default router;




