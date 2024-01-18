import { Challenge } from 'src/callenges/challenge.entity';
import { User } from 'src/users/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Unique, ManyToOne, JoinColumn } from 'typeorm';

@Entity('completed_challenges')
@Unique(['user_id', 'challenge_id'])
export class CompletedChallenge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  challenge_id: number;

  @ManyToOne(() => User, user => user.completedChallenges)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Challenge, challenge => challenge.completedChallenges)
  @JoinColumn({ name: 'challenge_id' })
  challenge: Challenge;

  @CreateDateColumn()
  completed_at: Date;
}
