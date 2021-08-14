import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsRepository } from './products.repository';
import { CategoriesRepository } from './categories.repository';

@Module({
  imports : [
    TypeOrmModule.forFeature([ProductsRepository,CategoriesRepository]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
