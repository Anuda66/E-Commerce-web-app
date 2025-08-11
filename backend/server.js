import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRpote.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'

// App config----------------------------------------------------------- 
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// Middelware----------------------------------------------------------- 
app.use(express.json())
app.use(cors()) // we can access the backend from any IP 

// API end point--------------------------------------------------------
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)


app.get('/', (req, res) =>{
    res.send("API Working")
})

// Start to express server---------------------------------------------- 
app.listen(port, () => console.log('Server started on PORT : ' + port))