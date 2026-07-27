import { Router } from "express";
import authRouter from "./auth_routers.js"
import userRouter from "./user_routers.js";

const routers = Router()

routers.use("/auth", authRouter)
routers.use("/user", userRouter)

export default routers