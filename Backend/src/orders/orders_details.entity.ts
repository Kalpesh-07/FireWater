import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: 'orders_details'})
export class Orders_Details extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    order_id : number;

    @Column()
    product_id : number;

    @Column()
    quantity : number;
}