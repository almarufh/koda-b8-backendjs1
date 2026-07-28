import { Router } from "express";
import authRouter from "./auth_routers.js"
import userRouter from "./user_routers.js";
import {authMiddleware} from "../middlewares/auth.js"
import {corsMiddleware} from "../middlewares/cors.js"

const routers = Router()
routers.use(authMiddleware)

routers.use("/auth", authRouter)
routers.use("/user", corsMiddleware, userRouter)

export default routers