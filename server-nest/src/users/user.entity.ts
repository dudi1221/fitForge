import { CompletedChallenge } from './../completed-challeng/completed-challenge.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn, ObjectId } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column('varchar', { length: 20, unique: true })
    username: string;

    @Column('varchar', { length: 30, unique: true })
    email: string;

    @Column()
    password: string;

    @Column('varchar', { length: 50 })
    fitness_goals: string;

    @Column({ default: 1 })
    level: number;

    @Column({ default: 0 })
    experience_points: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => CompletedChallenge, completedChallenge => completedChallenge.user)
    completedChallenges: CompletedChallenge[];
}