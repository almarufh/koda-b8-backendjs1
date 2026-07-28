import {constants} from "node:http2"
import multer from "multer"

/**
 * 
 * @param {import("express".Request)} req 
 * @param {import("express").Response} res 
 * @param {function()} next 
 */

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'database/image/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, "user" + uniqueSuffix + ".png")
    }
})

export function uploadMiddleware (file) {
    const upload = multer({
        storage: storage
    }).single(file)
    return function(req, res, next){
        upload(req, res, function(err){
            if(err) {
                res.status(constants.HTTP_STATUS_BAD_REQUEST).json({
                    status: false,
                    message: "Upload failed!"
                })
                return
            }
            console.log(req.file.path)
            next()
        })
    }
}