import userRepository from "../infra/repository/userRepository"


type CreateUserRequest = {
    username: string
    email: string
    password: string
  }


  class getUserServices {
    constructor (
        private readonly userRepository : userRepository
    ){}

    async login(email: string, passoword: string): Promise<CreateUserRequest|null> {
        const user = await this.userRepository.getUserByEmail(email)
        return user
    }
  }

  export default getUserServices