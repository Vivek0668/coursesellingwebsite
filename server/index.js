import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import adminRouter from "./routes/admin.js"
import userRouter from "./routes/user.js"
const app = express()
const port = 3000



app.use(cors())
app.use(express.json())

app.use("/users", userRouter)
app.use("/admin", adminRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

mongoose.connect('mongodb+srv://uneven076:egDAH7hfkYNVAeZL@cluster0.c6cwgzt.mongodb.net/course')

