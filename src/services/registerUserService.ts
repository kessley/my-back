import userRepository from "../infra/repository/userRepository";

type CreateUserRequest = {
    username: string
    email: string
    password: string
  }

class registerUserService {
    constructor(
        private readonly userRepository: userRepository
    ){}

    async registerUser(email: string, username: string, password: string): Promise<CreateUserRequest> {
        const user =  this.userRepository.registerUser({username, password, email})
        return user
    }
}

export default registerUserService