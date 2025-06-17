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
  age:z.number()
});

// user post data
userRoute.post("/create", async (req: Request, res: Response) => {
  try {
    const info = await createUserZod.parse(req.body);
    const userInfo = await User.create(info);
    res.status(201).json({
      Sucess: true,
      messege: "User insert data Sucessfully",
      data: userInfo,
    });
  } catch (error :any) {
    res.status(400).json({
         Sucess: false,
      messege: error?.errors || "Validation failed",
    })
  }
});
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
