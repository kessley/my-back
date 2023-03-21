import GetUSerController from "../controller/GetUserController";
import Encript from "../infra/encript/bycrypt";
import userRepository from "../infra/repository/userRepository";
import GetUserServices from "../services/GetUserService";



export default function makeGetUser(){
    const encript = new Encript()
    const repository = new userRepository()
    const service = new GetUserServices(repository, encript)
    const controller = new GetUSerController(service)

    return controller
}