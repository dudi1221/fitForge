import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from 'src/DTO/user.dto';

@Controller('users')
export class UsersController {
    constructor(private UsersService: UsersService) {}
        @Get()
        getAllUsers() {
            return this.UsersService.getAllUsers();
        }

        @Get(':id')
        getUser(@Param('id', ParseIntPipe) UserId: number) {
            return this.UsersService.getUserById(UserId);
        }

        @Post()
        addUser(@Body() newUser: UserDto) {
            return this.UsersService.addUser(newUser);
        }

        @Put(':id')
        updateUser(@Param('id') id: number, @Body() user: UserDto) {
            return this.UsersService.updateUser(id, user);
        }

        @Delete(':id')
        deleteUser(@Param('id') id: number) {
            return this.UsersService.deleteUser(id);
        }
}
