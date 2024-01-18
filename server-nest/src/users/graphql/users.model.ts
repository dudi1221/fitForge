import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";


// @InputType()
@ObjectType()
export class UserModel {   
    @Field()
    id: string;

    @Field()
    username: string;

    @Field()
    email: string;

    @Field()
    password: string;

    @Field()
    fitness_goals: string;

    @Field(() => Int)
    level: number;
}

// @InputType()
// export class CreateUser {
//     @Field()
//     username: string;

//     @Field()
//     email: string;

//     @Field()
//     password: string;

//     @Field()
//     fitness_goals: string;

//     @Field()
//     level: number;
// }
