import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Status } from '../enums/status.enum';
import { UserType } from '../enums/user-type.enum'

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'full_name', length: 50 })
    fullName: string;

    @Column({ name: 'display_name', nullable: true })
    displayName: string;

    @Column({ name: 'cart_id'})
    cartId: number;

    @Column({ name: 'email', nullable: true })
    email: string;

    @Column({ name: 'password', nullable: true })
    password: string;

    @Column({ name: 'phone_no', nullable: true })
    phoneNumber: string;

    @Column({ type: 'enum', enum: UserType, default: UserType.Appuser })
    type: UserType;

    @Column({ type: 'enum', enum: Status, default: Status.Active })
    status: Status;

}