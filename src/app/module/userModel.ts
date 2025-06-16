import { UserInfo } from './../interface/userInterface';
import { model, Schema } from "mongoose";

const userSchema =new Schema <UserInfo>({
     userName:{type:String,trim:true,required:true},
     email:{type:String,trim:true,required:true},
     address:{
        PresentAddress:{type:String,trim:true},
        temporaryAddress:{type:String,trim:true}
     },
     isActive:Boolean,
     phoneNumber:{type:Number,default: +880175},
     role:{type:String,trim:true ,enum:["user","admin"],default:"user"}
},{
    timestamps:true,
    versionKey:false
})
export const User = model("User",userSchema)