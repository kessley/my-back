import Encript from "../infra/encript/bycrypt";
import userRepository from "../infra/repository/userRepository";

type CreateUserRequest = {
    username: string
    email: string
    password: string
  }

class registerUserService {
    constructor(
        private readonly userRepository: userRepository,
        private readonly encript: Encript
    ){}

    async registerUser(email: string, username: string, password: string): Promise<CreateUserRequest> {
        const hashedPassword = await this.encript.hashPassword(password)
        const user =  this.userRepository.registerUser({username, password: hashedPassword, email})
        return user
    }
}

export default registerUserService