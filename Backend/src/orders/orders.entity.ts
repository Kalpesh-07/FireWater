import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name : 'orders'})
export class Orders extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    user_id : number;
}