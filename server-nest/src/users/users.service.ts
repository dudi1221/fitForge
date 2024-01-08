import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/DTO/user.dto';

@Injectable()
export class UsersService {
    users: UserDto[] = [];
    constructor() {
        let user1: UserDto = new UserDto();
        user1.id = 1;
        user1.name = 'shuki';
        user1.age = 24;

        let user2: UserDto = new UserDto();
        user2.id = 2;
        user2.name = 'riko';
        user2.age = 22;

        let user3: UserDto = new UserDto();
        user3.id = 3;
        user3.name = 'dedi';
        user3.age = 27;

        this.users.push(user1);
        this.users.push(user2);
        this.users.push(user3);
    }

    getAllUsers() :UserDto[] {
        return this.users;
    }

    getUserById(id: number): UserDto {
        return this.users.find(user => user.id == id);
    }

    addUser(user: UserDto) {
        this.users.push(user);
        return 'User successfully created';
    }

    updateUser( id: number, user: UserDto) {
        let index = this.users.findIndex(user => user.id == id);
        if(index >= 0) {
            this.users[index] = user;
            return 'User successfully updated';
        } else {
            return 'Id must be greader than zero';
        }
    }

    deleteUser(id: number) {
        let index = this.users.findIndex(user => user.id == id);
        if(index >= 0) {
            this.users.splice(index, 1);
            return 'User successfully deleted';
        } else {
            return 'Id must be greader than zero';
        }
    }
}
