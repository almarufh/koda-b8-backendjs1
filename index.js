import express from "express"
import {user, login} from "./src/models/users_models.js"
import routers from "./src/routers/index.js"

const app = express()

app.use(express.urlencoded())
console.log(user)
app.post("/login", (req, res) => {
   const {email, password} = req.body
   console.log(email)
//    user.forEach(u => {
//         if (email === u.email) {
//             res.json({
//                 success: true,
//                 message: `Wellcome ${user[i].name} !`
//             })
//             return
//         }
//         res.status(constants.HTTP_STATUS_UNAUTHORIZED).json({
//             success: false,
//             message:"Wrong Email or PAssword"
//         })
//     });
})

app.listen(8080,()=> {
    console.log("Server Actived")
})