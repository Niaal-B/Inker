import express from "express"
import cors from "cors"
import { Request, Response } from "express"
import { connectDb } from "./configs/mongo.config"
const PORT = 3000
const app = express()
app.use(cors())


connectDb()

app.get('/',(req:Request,res:Response)=>{
    /*
        @muhammedsirajudeen
        return statements must be void simple source of error avoid it.
    */


    res.status(200).json({message:"success"})
    return 
})  

app.listen(PORT, () => console.log(`Server started at ${PORT} ✅`))
