import express, { Application, Request, Response } from 'express'
import { userRoute } from './app/controler/userControler'
import { productRouter } from './app/controler/productControler'
const app:Application= express()
app.use(express.json())
app.use("/user",userRoute)
app.use("/product",productRouter)


app.get('/',async(req:Request,res:Response)=>{
    res.send("Server Open")
})
export default app;