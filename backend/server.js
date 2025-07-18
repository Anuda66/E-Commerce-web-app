import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRpote.js'

// App config----------------------------------------------------------- 
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// Middelware----------------------------------------------------------- 
app.use(express.json())
app.use(cors()) // we can access the backend fron any IP 

// API end point--------------------------------------------------------
app.use('/api/user', userRouter)


app.get('/', (req, res) =>{
    res.send("API Working")
})

// Start to express server---------------------------------------------- 
app.listen(port, () => console.log('Server started on PORT : ' + port))