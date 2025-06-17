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
    role:string
}