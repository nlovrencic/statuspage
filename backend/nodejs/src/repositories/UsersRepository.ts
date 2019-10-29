import { UserModel } from "../models";

class UsersRepository {
    public async createUser(email: string, password: string): Promise<void> {
        await UserModel.create({ email, password })
    }
}

export default new UsersRepository();