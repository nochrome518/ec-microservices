import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Status } from '../enums/status.enum';
import { UserType } from '../enums/user-type.enum'
import { ProductType } from "../enums/product-type.enum";

@Entity({ name: 'products' })
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', length: 150, nullable: true  })
    name: string;

    @Column({ name: 'category', nullable: true  })
    category: ProductType;

    @Column({ name: 'description', nullable: true })
    description: string;

    @Column({ name: 'price', nullable: true })
    price: number;

    @Column({ name: 'quantity', nullable: true })
    quantity: number;

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