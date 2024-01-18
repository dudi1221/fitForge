import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto, UserDto } from 'src/DTO/user.dto';
import { User } from './user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { encryptionPassword } from './utils/encryption';

@Injectable()
export class UsersService {
    // users: UserDto[] = [];
    constructor(
        @InjectRepository(User)
        private readonly userRepsitory: Repository<User>,
    ) {}

    findAll() {
        return this.userRepsitory.find();
    }

    // findOne(id: number): Promise<User | null> {
    //     return this.userRepsitory.findOneBy({ id });
    // }

    findByEmail(email: string): Promise<User | null> {
        try {
            return this.userRepsitory.findOneBy({ email });
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async create(user: UserDto): Promise<User> {
        try {
            // const ifExists = await this.findByEmail( user.email );
            // if (ifExists) throw new Error('Email already exists');
            const newUser: UserDto = { ...user, password: user.password };
            const encryption = encryptionPassword(newUser.password);
            newUser.password = await encryption;
            return this.userRepsitory.save(newUser);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async update(id: number, user: UpdateUserDto): Promise<UpdateResult> {
        const updatedUser = await this.userRepsitory.update(id, user);
        return updatedUser;
    }

    async delete(id: number) {
        const deleted = await this.userRepsitory.delete(id);
        return deleted;
    }
}
