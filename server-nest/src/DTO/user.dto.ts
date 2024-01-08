import { IsNotEmpty, Length } from "class-validator";

export class UserDto {
    id: number;

    @IsNotEmpty()
    name: string;
    age: number;
}