import { Router } from "express";
import makeUserRegister from "../factories/makeUserRegister";


const userRegister = makeUserRegister()
const userRouter = Router()

userRouter.post('/', userRegister.registerUser)

export default userRouter