import fs from "fs"
import path from "path"
import { sep } from "path/win32";
import { DEFAULT_CIPHERS } from "tls";

const FILE_PATH = path.join(process.cwd(), 'database', 'user.json');

function directory(filePath) {
    const dirname = path.dirname(filePath);
    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
    }
}

function loadUser() {
    try {
        directory(FILE_PATH);
        if (!fs.existsSync(FILE_PATH)) {
            const initialData = [];
            fs.writeFileSync(FILE_PATH, JSON.stringify(initialData, null, 2), 'utf-8');
            return initialData;
        }
        const fileContent = fs.readFileSync(FILE_PATH, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error('[LOAD FILE ERROR]', error.message);
        return [];
    }
}

function saveUser(data) {
    try {
        directory(FILE_PATH);
        fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        console.error('[FILE SAVE ERROR]', error.message);
    }
}

let user = loadUser()

function createUser ( newUser ) {
    user = [
        ...user,
        newUser
    ]

    saveUser(user)

    return newUser
}

function getUsers () {
    return user
}

function DetailUser (email) {
    let results = user.find(u => u.email === email)
    if (results === undefined) {
        return {
            success: true,
            message:"User not found",
            data: results
        }
    } else {
        return {
            succes: true,
            message: `found details user for ${email}`,
            data: results
        }
    }
}

function changeUser(emailUser, email, name) {
    let results = user.findIndex(u => u.email === emailUser)
    if (results !== -1) {
        user[results].email = email
        user[results].name = name
        saveUser(user)
        return {
            status: true,
            message: `Updated ${emailUser} success`,
            data: user[results]
        }
    } else {
        return {
            status: false,
            message: `Updated ${emailUser} failed, user not found`,
            data: {}
        }
    }

}

function deleteUser(emailUser, email, name) {
    let results = user.findIndex(u => u.email === emailUser)
    if (results !== -1) {
        let res = user.filter(e => e.email !== emailUser)
        user = res
        saveUser(user)
        return {
            status: true,
            message: `Delete user ${emailUser} success`,
            data: res
        }
    } else {
        return {
            status: false,
            message: `DeLete user  ${emailUser} failed, user not found`,
            data: {}
        }
    }

}

function searchUser (search, limit, page) {
    limit = parseInt(limit) || 5
    page = parseInt(page) || 1
    let start = (page - 1) * limit
    let res = user.filter(user => 
        user.email.toLowerCase().includes(search.toLowerCase())  || user.name.toLowerCase().includes(search.toLowerCase())
    )
    return {
        success: true,
        message: `${res.length} users found !`,
        data: res.slice(start, start + limit)
    }
}


export { 
    user, 
    createUser,
    getUsers,
    DetailUser,
    changeUser,
    deleteUser,
    searchUser
}