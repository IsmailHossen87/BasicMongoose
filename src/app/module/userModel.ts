import { UserInfo, address } from "./../interface/userInterface";
import { model, Schema } from "mongoose";
import validator from "validator";
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

const userSchema = new Schema<UserInfo>(
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
export const User = model("User", userSchema);
