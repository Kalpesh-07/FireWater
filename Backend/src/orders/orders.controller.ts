import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Orders_Details } from './orders_details.entity';
import { PlacedRequest } from './dto/placedrequest.dto';

@Controller('orders')
export class OrdersController {
    constructor(private ordersService: OrdersService){}

    @Get()
    getOrders():Promise<Orders_Details[]>{
       return this.ordersService.getOrders();
    }

    @Get('/:id')
    getOrderById(@Param('id') id : number):Promise<Orders_Details>{
       return this.ordersService.getOrderById(id);
    }

    @Post('/new')
    placeOrder(@Body() placedRequest : PlacedRequest){
      return this.ordersService.placeOrder(placedRequest);
    }

    @Post('/payment')
    payment(){
      return this.ordersService.payment();
    }

}
