import {constants} from "node:http2"
import {user} from "../models/users_models.js"

/**
 * 
 * @param {import{"expres"}.Request} req 
 * @param {import{"express"}.Response} res 
 */
export function login(req, res) {
   const {email, password} = req.body
   console.log(email)
   console.log(password)
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
} 