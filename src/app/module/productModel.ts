import { model, Schema } from "mongoose";
import { productInfo } from "../interface/productInterface";

const productSchema = new Schema<productInfo>({
    productName:{type:String},
    brand:{type:String},
    category:{type:String,enum:['electronic',"Fashion","Sports "],default:"electronic"},
    color:{type:String,enum:['gray','white','black'],default:'black'},
    quality:{type:String},
    quantity:{type:Number,default:0}
},{
    timestamps:true,
    versionKey:false
})
export const Product = model("Product",productSchema)