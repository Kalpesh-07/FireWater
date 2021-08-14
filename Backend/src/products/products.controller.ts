import { Controller, Get, Param } from '@nestjs/common';
import { Products } from './products.entity';
import { ProductsService } from './products.service';
import { ServerResponse } from "./dto/serverresponse.dto";
import { ProductResponse } from './dto/productresponse.dto';

@Controller('products')
export class ProductsController {

    constructor(private productService : ProductsService){}

    @Get()
    getProducts():Promise<ServerResponse>{
        return this.productService.getProducts();
    }

    @Get('/:id')
    getProductByid(@Param('id') id : number):Promise<ProductResponse>{
        return this.productService.getProductById(id);
    }

    @Get('/category/:cat_name')
    getProductsByCat(@Param('cat_name') cat_name : string):Promise<ServerResponse>{
         return this.productService.getProductsByCat(cat_name);
    }
}
