import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({nullable: true})
    email: string

    @Column()
    role: string 

    @Column()
    phone: string

}
