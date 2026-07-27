let user = [
    {
        id: 1,
        name: "admin",
        email: "admin@gmail.com",
        password: "1234"
    },
    {
        id: 2,
        name: "Alma'ruf Hidayat",
        email: "hidayatmaruf99@gmail.com",
        password: "1234"
    }
]

function createUser ( newUser ) {
    user = [
        ...user,
        newUser
    ]

    return newUser
}

function getUsers () {
    return user
}

function DetailUser (email) {
    console.log("testing", email)
    user.find(u => u.email )
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

export { 
    user, 
    createUser,
    getUsers,
    DetailUser
}