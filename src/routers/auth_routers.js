import { Router } from "express";
import * as authController from "../controlers/auth_controller.js"
import * as registerController from "../controlers/user_controlers.js"

const authRouter = Router()

authRouter.post("/login", authController.login)
authRouter.post("/register", registerController.createNewUser)

export default authRouter
