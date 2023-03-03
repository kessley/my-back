import { prismaClient } from "../../config/prisma";
import User from "../../domain/entities/User";

import { IUserRepository } from "../../domain/repositories/IUserRepository";

type UserParams = { username: string; email: string; password: string; }

class userRepository implements IUserRepository {
    async registerUser({ username, password, email }: UserParams): Promise<User> {
        return await prismaClient.user.create({
            data: {
                username, email, password
            }
        })
    }

    async getUserByEmail(email: string): Promise<User|null> {
        const userData = await prismaClient.user.findUnique({
            where: {email}
        })

        if (!userData) return null
        return new User(userData.id, userData.username, userData.email, userData.password)
    }
}

export default userRepository