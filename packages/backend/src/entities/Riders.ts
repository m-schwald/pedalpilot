import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Riders {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "text"})
    firstName: string
 
    @Column({ type: "text"})
    lastName: string

    @Column({ type: "text", unique: true})
    username: string

    @Column({ type: "int"})
    phoneNumber: number

    @Column({ type: "text"})
    email: string

    @Column({ type: "text"})
    notes: string
}