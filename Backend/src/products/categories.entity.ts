import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { Products } from "./products.entity";



@Entity()
export class Categories extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    title : string;

    @OneToMany(type=>Products, products => products.category)
    // @JoinColumn( {name : "id"})
    products : Products[];
}