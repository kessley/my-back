import User from "../entities/User"

type createUserDTO = {
    username: string, email: string, password: string
  }

export interface IUserRepository {
    registerUser({username, password, email}: createUserDTO): Promise<User>
    getUserByEmail(email: string): Promise<User|null>
}