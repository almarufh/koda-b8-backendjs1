import express from "express"
import {user, login} from "./src/models/users_models.js"
import routers from "./src/routers/index.js"
import {constants} from "node:http2"

const app = express()

app.use(express.urlencoded())
console.log(user)
app.post("/login", (req, res) => {
   const {email, password} = req.body
   console.log(email)
   user.forEach(u => {
    console.log(u.email)
        if (email === u.email && password === u.password) {
            res.json({
                success: true,
                message: `Wellcome ${u.name} !`
            })
            return
        }
        res.status(constants.HTTP_STATUS_UNAUTHORIZED).json({
            success: false,
            message:"Wrong Email or Password"
        })
    });
})

app.listen(8080,()=> {
    console.log("Server Actived")
})