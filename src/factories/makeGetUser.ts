import GetUSerController from "../controller/GetUserController";
import Encript from "../infra/encript/bycrypt";
import userRepository from "../infra/repository/userRepository";
import getUserServices from "../services/getUserService";



export default function makeGetUser(){
    const encript = new Encript()
    const repository = new userRepository
    const service = new getUserServices(repository, encript)
    const controller = new GetUSerController(service)

    return controller
}