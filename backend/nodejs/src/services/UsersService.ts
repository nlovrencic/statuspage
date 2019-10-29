import * as bcrypt from 'bcrypt';
import UsersRepository from '../repositories/UsersRepository';
import { User } from '../models';

const SALT_ROUNDS = 5;
class UsersService {
    public async registerUser(user: User) {
        const { email, password } = user;
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
        await UsersRepository.createUser(email, hashedPassword);
    }

    public async login(user: User) {
        // TODO: Implement
        console.log(user);
    }
}

export default new UsersService();