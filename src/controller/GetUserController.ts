import { Request, Response } from "express";
import GetUserServices from "../services/GetUserService";


class GetUSerController {
    constructor(
        private readonly getUserService:GetUserServices
    ){}
    
    async login(req:Request, res: Response){
        const {email,  password} = req.body
        if (!email) return res.status(400).send("Need to pass a email valid")
        if (!password) return res.status(400).send("Need to pass a password valid")
        const user = await this.getUserService.login(email, password)
        return res.status(201).json(user)
    }
}

export default GetUSerController