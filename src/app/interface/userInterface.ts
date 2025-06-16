export interface UserInfo{
    userName:string,
    email:string,
    address:{
        PresentAddress:string,
        temporaryAddress:string
    },
    phoneNumber:number,
    isActive:boolean,
    role:string
}