import fs from "fs"
import userRouter from "./src/user.js"
import { App } from "./framework/App.js"

const PORT = process.env.PORT || 1234


const app = new App()

app.addRouter(userRouter)


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`)})

