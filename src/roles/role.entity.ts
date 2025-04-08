import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20, nullable: false })
    name: string;

    @Column({ unique: true, nullable: false })
    code: number;

    @CreateDateColumn()
    inserted_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
