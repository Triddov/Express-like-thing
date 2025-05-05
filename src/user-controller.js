const userData = [
    {id: 1, name: 'petya'},
    {id: 2, name: 'step'},
]

const getUsers = (req, res) => {
    if (req.params.id){
        return res.send(userData.find(user => user.id === parseInt(req.params.id)))
    }
    res.send(userData)
}

const createUser = (req, res) => {
    const user = req.body
    userData.push(user)
    res.send(`pushed: `+ JSON.stringify(userData[req.params.id - 1]))
}

export { getUsers, createUser }