import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, JoinTable } from "typeorm";
import { Categories } from "./categories.entity";


@Entity()
export class Products extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    title : string;

    @Column()
    image : string;

    @Column("text")
    description : string;

    @Column("double")
    price : number;

    @Column()
    quantity : number;

    @Column()
    cat_id : number;

    @ManyToOne(type => Categories, categories => categories.products)
    @JoinColumn({name : "cat_id"})
    category : Categories;


}