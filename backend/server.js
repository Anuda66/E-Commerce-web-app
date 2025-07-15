import express from 'express'
import cors from 'cors'
import 'dotenv/config'

// App config-----------------------------------------------------------
const app = express()
const port = process.env.PORT || 4000

// Middelware-----------------------------------------------------------
app.use(express.json())
app.use(cors()) // we can access the backend fron any IP 

// API end point--------------------------------------------------------
app.get('/', (req, res) =>{
    res.send("API Working")
})

// Start to express server----------------------------------------------
app.listen(port, () => console.log('Server started on PORT : ' + port))