import registerUserService from "../services/registerUserService";
import userRepository from "../infra/repository/userRepository";
import RegisterUserController from "../controller/RegisterUserController";
import Encript from "../infra/encript/bycrypt";


export default function makeUserRegister() {
    const encript = new Encript()
    const repository = new userRepository()
    const service = new registerUserService(repository, encript)
    const controller = new RegisterUserController(service)

    return controller
}