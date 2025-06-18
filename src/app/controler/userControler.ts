import express, { Request, Response } from "express";
import { User } from "../module/userModel";
import { z } from "zod";
export const userRoute = express.Router(); 


const createUserZod = z.object({
  userName: z.string(),
  email: z.string(),
  address: z.object({
    HoldingNumber: z.number(),
    PresentAddress: z.string(),
    temporaryAddress: z.string(),
  }),
  phoneNumber: z.number(),
  role: z.string(),
  password: z.string(),
  age:z.number()
});

// user post data
userRoute.post("/create", async (req: Request, res: Response) => {
  try {
    const info = await createUserZod.parse(req.body);
    // const body = req.body
    const userInfo = await User.create(info)

    res.status(201).json({
      Sucess: true,
      messege: "User insert data Sucessfully",
      data: userInfo,
    });
  } catch (error :any) {
    res.status(400).json({
         Sucess: false,
      messege: error?.errors || "Validation failed",
      error
    })
  }
}); 
// userRoute.post("/create", async (req: Request, res: Response) => {
//   try {
//     const body = req.body;

//     // Validate data first
//     const info = await createUserZod.parse(body);

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(info.password.toString(), 10); // number → string
//     info.password = hashedPassword; // replace the plain password

//     // Save to DB
//     const userInfo = await User.create(info);

//     res.status(201).json({
//       Success: true,
//       message: "User insert data successfully",
//       data: userInfo,
//     });

//   } catch (error: any) {
//     res.status(400).json({
//       Success: false,
//       message: error?.errors || "Validation failed",
//     });
//   }
// });

// user Updata data
userRoute.patch("/update/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;
  const userInfo = await User.findByIdAndUpdate(id, body, { new: true });
  res.status(201).json({
    Sucess: true,
    messege: "User update data Sucessfully",
    data: userInfo,
  });
});

// delete
userRoute.delete("/delete/:id",async(req:Request,res:Response)=>{
    const {id} = req.params 
    const userDelete = await User.findOneAndDelete({_id:id})
    res.status(201).json({
        Sucess:true,
        messege:"Users  data deleted Sucessfully",
        data:userDelete
    })
})