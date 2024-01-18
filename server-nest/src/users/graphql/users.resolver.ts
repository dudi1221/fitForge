import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserModel } from "./users.model";
import { UsersService } from "../users.service";
import { UserDto } from "src/DTO/user.dto";
//armored warfare

@Resolver(/* () => */ UserModel)
export class UsersResolver {
    constructor(private /* readonly */ usersService: UsersService) {}

    @Query(() => [UserModel])
    findAll() {
        return this.usersService.findAll();
    }

    @Mutation(() => UserModel)
    async createUser(@Args('user') user: UserDto) {
        return this.usersService.create(user);
    }

    @Mutation(() => UserModel)
    async deleteUser(@Args('id') id: number) {
        return this.usersService.delete(id);
    }
}