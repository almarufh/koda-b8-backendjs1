import { Router } from "express";
import * as userController from "../controlers/user_controlers.js"

const userRouter = Router()

userRouter.get("/lists", userController.getListUsers)
userRouter.get("/detail/:email", userController.getDetailUser)
userRouter.patch("/update/:email", userController.updateUser)

export default userRouter
