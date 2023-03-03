import { Request, Response } from "express";
import registerUserService from "../services/registerUserService";

class RegisterUserController {
    constructor (
        private readonly registerUserService: registerUserService
    ){}
    
    registerUser =async (request:Request, response: Response) => {
        const {username, email, password} = request.body
        console.log(username," ",  password," ", email)
    }

}
export default RegisterUserController