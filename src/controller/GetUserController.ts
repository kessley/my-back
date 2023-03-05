import { Request, Response } from "express";
import getUserServices from "../services/getUserService";


class GetUSerController {
    constructor(private readonly getUserService:getUserServices){}
    
    login(req:Request, res: Response){
        const {email,  passoword} = req.body
        const user = this.getUserService.login(email, passoword)
        return res.status(201).json(user)
    }
}

export default GetUSerController