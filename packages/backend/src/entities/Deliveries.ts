import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Deliveries {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "text"})
    from: string
 
    @Column({ type: "text"})
    to: string

    @Column({ type: "text"})
    description: string

    @Column({ type: "text"})
    rider: string

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    date: Date

    @Column({ type: "text"})
    timeToDeliver: string

    @Column({ type: "boolean", default: false})
    delivered: boolean

    @Column({ type: "text"})
    notes: string

    @Column({ type: "text"})
    status: string
}