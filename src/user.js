import { Router } from "../framework/Router.js"

const router = new Router()

const userData = {
    admin: "im admin",
    user: "im user",
}

router.get("/users", (req, res) => {
    res.send(userData["user"])
})

router.post("/users", (req, res) => {
    console.log(req.body)
    res.send(`alright`)
})

router.get("/admin", (req, res) => {
    res.send(userData)
})

export default router