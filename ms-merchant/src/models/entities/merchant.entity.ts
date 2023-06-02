import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MerchantStatus, Status } from '../enums/status.enum';
import { ProductType } from "../enums/product-type.enum";

@Entity({ name: 'merchants' })
export class Merchant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'm_id' })
    mId: number;

    @Column({ name: 'company_name', nullable: true  })
    companyName: string;

    @Column({ name: 'transaction_email', nullable: true })
    transactionEmail: string;

    @Column({ name: 'user_id' })
    userId: number;

    @Column({ name: 'contact_name' })
    contactName: string;

    @Column({ name: 'contact_phone' })
    contactPhone: string;

    @Column({ name: 'contact_email' })
    contactEmail: string;

    @Column({ name: 'contact_address' })
    contactAddress: string;

    @Column({ name: 'payment_method'})
    paymentMethod: string;

    @Column({ name: 'payment_details', nullable: true })
    paymentDetails: string;

    @Column({ name: 'profile_image', nullable: true })
    profileImage: string;

    @Column({ type: 'enum',name: 'merchant_status', enum: MerchantStatus, default: MerchantStatus.NotVerfied })
    merchantStatus: MerchantStatus;

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