import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Customers {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: 'text'})
    name: string;

    @Column({type: 'text'})
    address: string;
    
    @Column({type: 'text'})
    email: string;

    @Column({type: 'text'})
    phoneNumber: string;

    @Column({type: 'text'})
    notes: string;
    }