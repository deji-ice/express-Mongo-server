import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import userRoutes from './routes/users.js'
import connectDB from './db/conn.js'
import authRouter from './routes/auth.js'

const app = express()
const PORT = process.env.PORT || 8000

// Connect to MongoDB
connectDB();

// Parse JSON request body
app.use(express.json());

// Define authentication routes
app.use('/auth', authRouter);
app.use(cors())

app.use('/api', userRoutes)


app.listen(PORT,() =>{
    console.log(`local host is running on http://localhost:${PORT}`)
})