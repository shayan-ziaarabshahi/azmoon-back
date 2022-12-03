
import express from 'express'
import dotenv from 'dotenv'
import assessmentRoutes from './nodes/routes/route.js'
import { errorHandler } from './middlewares/error.js'
import path from 'path'
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


// Serve frontend
/* if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../front/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'front', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
} */

app.use(errorHandler)
app.listen(port, () => console.log(`server started on port ${port}`))