import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
// import { UserDto } from 'src/DTO/user.dto';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private UsersService: UsersService) {}
        @Get()
        getAllUsers() {
            return this.UsersService.findAll();
        }

        // @Get(':id')
        // getUser(@Param('id', ParseIntPipe) UserId: number) {
        //     return this.UsersService.findOne(UserId);
        // }

        @Post()
        async addUser(@Body() newUser: User) {
            const result = await this.UsersService.create(newUser);
            return result;
        }

        @Put(':id')
        async updateUser(@Param('id') id: number, @Body() user: User) {
            const result = await this.UsersService.update(id, user);
            return result;
        }

        @Delete(':id')
        async deleteUser(@Param('id') id: number) {
            const result = await this.UsersService.delete(id);
            return result;
        }
}
