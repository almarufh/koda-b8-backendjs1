import { Router } from "express";
import * as userController from "../controlers/user_controlers.js"
import {uploadMiddleware} from "../middlewares/upload.js"

const userRouter = Router()

userRouter.get("/lists", userController.getListUsers)
userRouter.get("/detail/:email", userController.getDetailUser)
userRouter.patch("/update/:email", userController.updateUser)
userRouter.delete("/delete/:email", userController.deletedUser)
userRouter.get("/search", userController.search)
userRouter.post("/image", uploadMiddleware("coba"), userController.upload)

export default userRouter
