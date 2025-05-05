import { Router } from "../framework/Router.js"

const router = new Router()

const userData = {
    admin: "im admin",
    user: "im user",
}

router.get("/users", (req, res) => {
    res.end(JSON.stringify(userData["user"]))
})

router.post("/users", (req, res) => {
    res.end(JSON.stringify(userData["user"]) + " this is post method")
})

router.get("/admin", (req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    })
    res.end(JSON.stringify(userData))
})

export default router