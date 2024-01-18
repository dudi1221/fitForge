import { IsNotEmpty, IsString, IsEnum, IsInt } from 'class-validator';

export class CreateChallengeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsEnum(['Beginner', 'Intermediate', 'Advanced'])
  difficulty: string;

  @IsNotEmpty()
  @IsInt()
  experience_points: number;
}

export class UpdateChallengeDto {
  name: string;
  description: string;
  category: string;
  difficulty: string;
  experience_points: number;
}
