
import express from 'express'
import dotenv from 'dotenv'
import assessmentRoutes from './nodes/routes/route.js'
import { errorHandler } from './middlewares/error.js'
import cors from 'cors'



dotenv.config()

const port = process.env.PORT || 5000
const app = express()


app.use(cors({
  origin:'https://azmoon.onrender.com',
})) 


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/assessment', assessmentRoutes)

app.use(errorHandler)
app.listen(port, () => console.log(`server started on port ${port}`))
