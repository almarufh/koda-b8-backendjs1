import { Router } from "express";
import * as userController from "../controlers/user_controlers.js"

const userRouter = Router()

userRouter.get("/lists", userController.getListUsers)
userRouter.get("/detail/:email", userController.getDetailUser)

export default userRouter
