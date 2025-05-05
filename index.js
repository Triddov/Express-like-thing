import http from "http"
import eventEmitter from 'events'
import fs from "fs"
import { Router } from "./framework/Router.js"
import { App } from "./framework/App.js"

const PORT = process.env.PORT || 1234


const app = new App()
const router = new Router()




app.addRouter(router)


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`)})

