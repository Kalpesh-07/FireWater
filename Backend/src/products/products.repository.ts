import { Products } from "./products.entity";
import { EntityRepository, Repository, getManager } from "typeorm";
import { Categories } from "./categories.entity";
import { NotFoundException } from "@nestjs/common/exceptions/not-found.exception";
import { ServerResponse } from "./dto/serverresponse.dto";
import { ProductResponse } from "./dto/productresponse.dto";

@EntityRepository(Products)
export class ProductsRepository extends Repository<Products>{

    async getProducts():Promise<ServerResponse>{
        const result:ProductResponse[] = await getManager().createQueryBuilder(Products, 'p')
                                        .addSelect('p.id','id')
                                        .addSelect('p.title','name')
                                        .addSelect('p.image','image')
                                        .addSelect('p.description','description')
                                        .addSelect('p.quantity','quantity')
                                        .addSelect('p.price','price')
                                        .addSelect('c.title','category')
                                        .innerJoin(Categories,'c','p.cat_id = c.id')
                                        .orderBy('p.id')
                                        .getRawMany()
        const res:ServerResponse = { products : result}
        
        return res;  
    }

    async getProductById(id : number):Promise<ProductResponse>{
         const found : ProductResponse =  await getManager().createQueryBuilder(Products, 'p')
                                            .addSelect('p.id','id')
                                            .addSelect('p.title','name')
                                            .addSelect('p.image','image')
                                            .addSelect('p.description','description')
                                            .addSelect('p.quantity','quantity')
                                            .addSelect('p.price','price')
                                            .addSelect('c.title','category')
                                            .innerJoin(Categories,'c','p.cat_id = c.id')
                                            .where('p.id = :p_id',{p_id : id})
                                            .getRawOne()

        if(!found){
            throw new NotFoundException(`Product with ID "${id}" not found `);
        }
        
        return found;
    }    


    async getProductsByCat(cat_id : number):Promise<ServerResponse>{

        const result = await getManager().createQueryBuilder(Products, 'p')
                                        .addSelect('p.id','id')
                                        .addSelect('p.title','name')
                                        .addSelect('p.image','image')
                                        .addSelect('p.description','description')
                                        .addSelect('p.quantity','quantity')
                                        .addSelect('p.price','price')
                                        .addSelect('c.title','category')
                                        .innerJoin(Categories,'c','p.cat_id = c.id')
                                        .where('c.id = :cat_id',{cat_id : cat_id})
                                        .getRawMany()

        const res = { products : result }
        return res;
    }

}