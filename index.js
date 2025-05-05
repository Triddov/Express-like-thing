import { App } from "./framework/App.js"
import userRouter from "./src/user-routes.js"
import jsonParser from "./framework/widdlewares/parsejson.js"
import urlParser from "./framework/widdlewares/parseurl.js"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 1234
const PROTOCOL = process.env.PROTOCOL || "http"
const HOST = process.env.HOST || "localhost"


const app = new App()

app.addRouter(userRouter)
app.use(jsonParser)
app.use(urlParser(`${PROTOCOL}://${HOST}:${PORT}`))

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`)})

