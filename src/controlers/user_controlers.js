import {constants} from "node:http2"
import {
    createUser,
    getUsers,
    DetailUser,
    changeUser,
    deleteUser,
    searchUser
} from "../models/users_models.js"

/**
 * 
 * @param {import{"expres"}.Request} req 
 * @param {import{"express"}.Response} res 
*/
export function createNewUser (req, res) {
    const {
        id,
        name,
        email,
        password
    } = req.body

    let newUser = {
        "id": id,
        "name": name,
        "email": email,
        "password": password
    }
    
    let results = createUser(newUser)
    console.log("results", results)
    res.json({
        success: true,
        message: "Register Succes",
        data: results
    })

}

export function getListUsers (req, res) {
    res.json({
        success: true,
        message: "succes",
        data: getUsers()
    })
}

export function getDetailUser (req, res) {
    const email = req.params.email
    console.log(email)
    let results = DetailUser(email)
    console.log(results)
    res.json({
        results
    })
}

export function updateUser (req, res) {
    const emailUser = req.params.email
    const {email, name} = req.body
    let results = changeUser(emailUser, email, name)
    res.json({
        results
    })
}

export function deletedUser (req, res) {
    const {email} = req.params
        console.log(res)
    let results = deleteUser(email)
    res.json({
        results
    })
}

export function search (req, res) {
    const searching  = req.query.searching
    console.log(searching)
    let results = searchUser(searching)
    res.json({
        results
    })
}