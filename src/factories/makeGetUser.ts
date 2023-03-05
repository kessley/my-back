import GetUSerController from "../controller/GetUserController";
import userRepository from "../infra/repository/userRepository";
import getUserServices from "../services/getUserService";



export default function makeGetUser(){
    const repository = new userRepository
    const service = new getUserServices(repository)
    const controller = new GetUSerController(service)

    return controller
}