import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsRepository } from 'src/products/products.repository';
import { OrdersDetailsRepository } from './orders_details.repository';
import { OrdersRepository } from './orders.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrdersDetailsRepository,OrdersRepository,ProductsRepository])
  ],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
