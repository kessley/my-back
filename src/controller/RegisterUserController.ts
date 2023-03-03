import { Request, Response } from "express";
import registerUserService from "../services/registerUserService";
type req = {username: String, email: String, password: String}

class RegisterUserController {
    constructor (
        private readonly registerUserService: registerUserService
    ){}
    registerUser =async (request:Request, response: Response) => {
        const {username, email, password} = request.body
        console.log(request.body)
        if (!username) return response.status(400).send("Need to pass a usename valid")
        if (!email) return response.status(400).send("Need to pass a email valid")
        if (!password) return response.status(400).send("Need to pass a password valid")
    }

}
export default RegisterUserController