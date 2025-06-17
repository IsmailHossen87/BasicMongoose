import { Model } from "mongoose"

// for address
export interface address {
    PresentAddress:string,
    temporaryAddress:string,
    HoldingNumber:number
}
export interface UserInfo{
    userName:string,
    email:string,
    age:number,
    address:address,
    phoneNumber:number,
    isActive:boolean,
    password:string,
    role:string
}


// export interface userInstanceMethods {
//     hashPassword(password:string):string
// }

export interface UserStaticMethod extends Model<UserInfo> {
    hashPassword(password:string) : string
}