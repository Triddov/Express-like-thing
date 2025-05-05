import { App } from "./framework/App.js"
import userRouter from "./src/user.js"
import jsonParser from "./framework/widdlewares/parsejson.js"


const PORT = process.env.PORT || 1234


const app = new App()

app.addRouter(userRouter)
app.use(jsonParser)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port`)})

