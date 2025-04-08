
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, } from "typeorm";



@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "varchar",
        length: 40,
        nullable: false
    })
    first_name: string;


    @Column({
        type: "varchar",
        length: 40,
        nullable: false
    })
    last_name: string;



    @Column({
        type: "varchar",
        nullable: false,
        length: 50,
        unique: true
    })
    email: string;


    @Column({
        type: "varchar",
        nullable: false,
        length: 96
    })
    password: string;


    @Column({
        type: 'boolean',
        default: false
    })
    is_verified: boolean


    @CreateDateColumn()
    inserted_at: Date;


    @UpdateDateColumn()
    updated_at: Date;

}