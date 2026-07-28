import {constants} from "node:http2"
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {function()} next
 */
export function authMiddleware(req, res, next){
    const authHeader = req.header("Authorization")
    let key = process.env.SECRET_KEY
    if (authHeader !== "bismillah") {
        res.status(constants.HTTP_STATUS_UNAUTHORIZED).json({
            status: false,
            mesage: `Unautorization ${authHeader}`
        })
    }
    next()
}