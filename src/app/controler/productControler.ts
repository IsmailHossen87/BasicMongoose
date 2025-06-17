import express, { Request, Response } from 'express'
import { Product } from '../module/productModel'
export const productRouter = express.Router()


productRouter.post("/create",async(req:Request,res:Response)=>{
    const data = req.body 
    const productInfo =await Product.create(data)
    res.status(201).json({
        Sucess:true,
        messege:"Product insert data Sucessfully",
        data:productInfo
    })
})
// get
productRouter.get("/alldata",async(req:Request,res:Response)=>{
    const product = await Product.find().populate("user")
    res.status(201).json({
        Sucess:true,
        messege:"Products All data Sucessfully",
        data:product
    })
})
// update
productRouter.patch("/update/:id",async(req:Request,res:Response)=>{
    const {id} = req.params 
    const body = req.body
    const productInfo =await Product.findByIdAndUpdate(id,body,{new:true})
    res.status(201).json({
        Sucess:true,
        messege:"Product update data Sucessfully",
        data:productInfo
    })
})