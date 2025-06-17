import { Types } from "mongoose";

export interface productInfo{
    productName:string,
    quantity:number,
    quality:string,
    category:string,
    brand:string,
    color:string,
    user:Types.ObjectId
}