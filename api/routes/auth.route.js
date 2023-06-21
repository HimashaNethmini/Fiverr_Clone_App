//for authenticating users
import express from "express";
import { register, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

//post- sending user details to authenticate
router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)

export default router;