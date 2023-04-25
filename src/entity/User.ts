import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    role: string 

    @Column()
    phone: string

    @CreateDateColumn({type: Date})
    createdAt: string

    @UpdateDateColumn({type: Date})
    updatedAt: string

}
