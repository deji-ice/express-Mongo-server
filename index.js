import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import userRoutes from './routes/users.js'

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())

app.use('/api', userRoutes)


app.listen(PORT,() =>{
    console.log(`local host is running on http://localhost:${PORT}`)
})