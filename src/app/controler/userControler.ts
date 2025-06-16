import express, { Request, Response } from 'express'
import { User } from '../module/userModel'
export const userRoute = express.Router()

// user post data
userRoute.post("/create",async(req:Request,res:Response)=>{
    const info = req.body 
    const userInfo =await User.create(info)
    res.status(201).json({
        Sucess:true,
        messege:"User insert data Sucessfully",
        data:userInfo
    })
})
// user Updata data
userRoute.patch("/update/:id",async(req:Request,res:Response)=>{
    const {id} = req.params 
    const body = req.body
    const userInfo =await User.findByIdAndUpdate(id,body,{new:true})
    res.status(201).json({
        Sucess:true,
        messege:"User update data Sucessfully",
        data:userInfo
    })
})