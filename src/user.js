import { Router } from "../framework/Router.js"

const router = new Router()

const userData = {
    admin: "im admin",
    user: "im user",
}

router.get("/users", (req, res) => {
    res.end("text from /users")
})

router.get("/posts", (req, res) => {
    res.end("text from /posts")
})