import Encript from "../infra/encript/bycrypt"
import userRepository from "../infra/repository/userRepository"


type CreateUserRequest = {
    username: string
    email: string
    password: string
  }


  class GetUserServices {
    constructor (
        private readonly userRepository : userRepository,
        private readonly encript:Encript
    ){}

    async login(email: string, password: string): Promise<CreateUserRequest|null> {
        const user = await this.userRepository.getUserByEmail(email)
        if (user){
          const isMath = await this.encript.comparePassword(password, user.password)
          return isMath? user:null
          
        }
        return null
    }
  }

  export default GetUserServices