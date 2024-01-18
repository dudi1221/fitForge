import { CompletedChallenge } from 'src/completed-challeng/completed-challenge.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

@Entity('challenges')
export class Challenge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  difficulty: string;

  @Column()
  experience_points: number;
  
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => CompletedChallenge, completedChallenge => completedChallenge.challenge)
  completedChallenges: CompletedChallenge[];
}
