import { Field, InputType, Int } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class UserDto {
    @IsNotEmpty()
    @IsString()
    @Field()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    @Field()
    email: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    password: string;

    @IsNotEmpty()
    @IsString()
    @Field()
    fitness_goals: string;
    @Field(() => Int)
    level?: number;
    @Field(() => Int)
    experience_points?: number;
}

export class UpdateUserDto {
    fitness_goals: string;
    level?: number;
    experience_points?: number;
}