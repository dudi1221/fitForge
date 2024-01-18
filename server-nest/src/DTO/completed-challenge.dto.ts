import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateCompletedChallengeDto {
    @IsNotEmpty()
    @IsInt()
    id: number;

    @IsNotEmpty()
    @IsInt()
    user_id: number;

    @IsNotEmpty()
    @IsInt()
    challenge_id: number;
}
