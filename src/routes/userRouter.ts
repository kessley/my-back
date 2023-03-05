import { Router } from "express";
import makeGetUser from "../factories/makeGetUser";
import makeUserRegister from "../factories/makeUserRegister";


const userRegister = makeUserRegister()
const userRouter = Router()
const userGet =  makeGetUser()
userRouter.post('/', userRegister.registerUser)
userRouter.post('/login', userGet.login)
export default userRouter