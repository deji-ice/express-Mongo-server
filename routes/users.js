import express from 'express'
import db from '../db/conn.js'

const userRoutes = express.Router()

userRoutes.get('/users', async (req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    let collection = await db.collection('users')
    let results = await collection.find({}).limit(10).toArray()
    console.log(results)
    res.send(results)
})


export default userRoutes