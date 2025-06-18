import { UserInfo, address, UserStaticMethod } from "./../interface/userInterface";
import {  model, Schema } from "mongoose";
import validator from "validator"; 
import bcrypt from "bcryptjs";
import { Product } from "./productModel";
// For address Schema
const addressSchema = new Schema<address>(
  {
    HoldingNumber: { type: Number },
    PresentAddress: { type: String, trim: true },
    temporaryAddress: { type: String, trim: true },
  },
  {
    _id: false,
  }
);
// For user Schema

const userSchema = new Schema<UserInfo,UserStaticMethod>(
  {
    userName: {
         type: String,
          trim: true,
          required: true ,
          uppercase:true ,
          minlength:[4,'Must be at least 6'],
          maxlength:[15,'Must be at least 15']},
    email: {
      type: String,
      required: true,
      validate: [validator.isEmail, "Invalid Email sent {VALUE}"],
      unique:[true,'Email is similar']
    },
    address: { type: addressSchema },
    isActive: Boolean,
    phoneNumber: {
      type: Number,
      // validate: [validator.isMobilePhone, "Invalid Phobe Number {VALUE}"],
    },
    password:{type:String},
    role: {
      type: String,
      trim: true,
      enum: ["user", "admin"],
      default: "user",
    },
    age:{type:Number,
        min:[15,"Must be at least 6 got {VALUE}"],
        max:[60,"Must be at least 10 got {VALUE}"]
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// userSchema.method("hashPassword",async function updatePassword(PlainPassword:string){
//  const password = await bcrypt.hash(PlainPassword,10)
//  return password
// })

// userSchema.static("hashPassword",async function hashPassword(PlainPassword:string) {
//   const password = await bcrypt.hash(PlainPassword,10)
//   return password
// } )

userSchema.pre("save", async function(next){ 
  const password = await bcrypt.hash(this.password,10)
  console.log(password,"this.password")
  this.password = password
  next()
}) 

userSchema.post("findOneAndDelete",async function(doc,next){
  if(doc){
    await Product.deleteMany({user:doc._id})
    console.log({user:doc._id})
    next()
  }
})
export const User = model<UserInfo,UserStaticMethod>("User", userSchema);

