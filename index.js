import express from "express"
import {user} from "./src/models/users_models.js"
import routers from "./src/routers/index.js"
import {constants} from "node:http2"

const app = express()

app.use(express.urlencoded())

app.use(routers)

const PORT = process.env.PORT || 8080
app.listen(PORT,()=> {
    console.log("Server Actived", PORT)
})