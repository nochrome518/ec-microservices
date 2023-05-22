import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Status } from '../enums/status.enum';
import { UserType } from '../enums/user-type.enum'

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'full_name', length: 50, nullable: true  })
    fullName: string;

    @Column({ name: 'display_name', nullable: true })
    displayName: string;

    @Column({ name: 'cart_id', nullable: true })
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

    @Column({ name: 'created_by', nullable: true })
    createdBy: number;

    @CreateDateColumn({ name: 'created_date', type: 'timestamp', update: false })
    createdDate: Date;

    @Column({ name: 'updated_by', nullable: true })
    updatedBy: number;

    @UpdateDateColumn({ name: 'updated_date', type: 'timestamp', nullable: true })
    updatedDate: Date;

    @Column({ name: 'deleted_by', nullable: true })
    deletedBy: number;

    @DeleteDateColumn({ name: 'deleted_date', type: 'timestamp', nullable: true })
    deletedDate: Date;

}