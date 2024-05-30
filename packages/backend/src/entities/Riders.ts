import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Rider {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "text"})
    firstName: string
 
    @Column({ type: "text"})
    lastName: string

    @Column({ type: "text"})
    username: string

    @Column({ type: "int"})
    phoneNumber: number

    @Column({ type: "text"})
    email: string

    @Column({ type: "text"})
    notes: string
}