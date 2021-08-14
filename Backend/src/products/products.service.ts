import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './products.entity';
import { getManager } from 'typeorm';
import { Categories } from './categories.entity';
import { CategoriesRepository } from './categories.repository';
import { ServerResponse } from "./dto/serverresponse.dto";
import { ProductResponse } from './dto/productresponse.dto';

@Injectable()
export class ProductsService implements OnModuleInit {
    onModuleInit() {
        console.log(`The module has been initialized.`);
      }
    constructor(
        @InjectRepository(ProductsRepository)
        private productsRepository : ProductsRepository,
        @InjectRepository(CategoriesRepository)
        private categoriesRepository : CategoriesRepository
    ){}

    async getProducts():Promise<ServerResponse>{
        return this.productsRepository.getProducts(); 
    }

    async getProductById(id : number):Promise<ProductResponse>{
        return this.productsRepository.getProductById(id);
    }    

    async getProductsByCat(cat_name : string):Promise<ServerResponse>{
        const res = await this.categoriesRepository.find({where:{title :cat_name}});
        return this.productsRepository.getProductsByCat(res[0].id);
    }
}
