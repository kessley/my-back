import registerUserService from "../services/registerUserService";
import userRepository from "../infra/repository/userRepository";
import RegisterUserController from "../controller/RegisterUserController";


export default function makeUserRegister() {
    const repository = new userRepository()
    const service = new registerUserService(repository)
    const controller = new RegisterUserController(service)

    return controller
}