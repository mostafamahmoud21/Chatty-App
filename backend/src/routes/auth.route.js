import express from "express";
import { login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { validation } from "../middlewares/validator.js";
import { loginValidation, signupValidation } from "../validations/authValidation.js";
import { protectRoute } from "../middlewares/authMiddleware.js";

export const authRouter = express.Router();

authRouter.post("/signup", validation(signupValidation),signup);
authRouter.post("/login", validation(loginValidation),login);
authRouter.post("/logout", logout);

authRouter.put("/update-profile", protectRoute, updateProfile);
