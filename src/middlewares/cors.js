
import {constants} from "node:http2"
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {function()} next
 */
export function corsMiddleware(req, res, next){
    res.setHeader("Access-Control-Allow-Origin", process.env.FRONTEND)
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,PATCH")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization")
    // console.log(req.method, req.headers)
    if(req.method === "OPTION" || req.methode === "PUT" || req.headers.origin !== process.env.FRONTEND) {
        res.sendStatus(constants.HTTP_STATUS_NO_CONTENT)
    }
    next()
}