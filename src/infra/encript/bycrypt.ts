import bcrypt from 'bcrypt'


class Encript {
    async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
      }

      async comparePassword(password: string, hash: string): Promise<boolean> {
        return await bcrypt.compare(password, hash)
      }
}

export default Encript