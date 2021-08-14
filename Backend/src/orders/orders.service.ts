import { Injectable } from '@nestjs/common';
import { OrdersDetailsRepository } from './orders_details.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Orders_Details } from './orders_details.entity';
import { getManager } from 'typeorm';
import { OrdersRepository } from './orders.repository';
import { PlacedRequest } from './dto/placedrequest.dto';
import { ProductsRepository } from 'src/products/products.repository';
import { exception, time } from 'console';
import { PlacedResponse } from './dto/placedresponse.dto';
import { Products } from 'src/products/products.entity';
import { timer } from 'rxjs';
import { setTimeout } from 'timers';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(OrdersDetailsRepository)
        private ordersDetailRepository : OrdersDetailsRepository,
        @InjectRepository(OrdersRepository)
        private ordersRepository : OrdersRepository,
        @InjectRepository(ProductsRepository)
        private productsRepository : ProductsRepository,

    ){}

    async getOrders():Promise<Orders_Details[]>{
        return this.ordersDetailRepository.find();  
    }

    async getOrderById(id : number):Promise<Orders_Details>{
        return this.ordersDetailRepository.findOne(id);
    }

    async placeOrder(placedRequest : PlacedRequest):Promise<PlacedResponse>{
        const { userId, products} = placedRequest;
        if (userId !== null && userId > 0){
            const insertid = await this.ordersRepository.insert({user_id : userId});
            const insertId = insertid.raw.insertId;
            if (insertId > 0) {
                products.forEach(async (p) => {
                    let data = await this.productsRepository.findOne(p.id);
                    let inCart = (p.incart);
                    if (data.quantity > 0) {
                        data.quantity = data.quantity - inCart;
        
                        if (data.quantity < 0) {
                            data.quantity = 0;
                        }
        
                    } else {
                        data.quantity = 0;
                    }
            
                    await this.ordersDetailRepository.insert({
                                order_id: insertId,
                                product_id: p.id,
                                quantity: inCart
                    }).then(newId => {
                        this.productsRepository.update({id : p.id},{ quantity: data.quantity});
                    }).catch(err => {console.log(err);
                    }).catch(err => console.log(err)
                    )
                });
        
            }else{
                throw new exception('New order failed while adding order details');
            }
            const response:PlacedResponse = {
                message: `Order successfully placed with order id ${insertId}`,
                success: true,
                order_id: insertId,
                products: products
            }      

            return response;
        }else{
            throw new exception(JSON.stringify({message: 'New order failed', success: false}));
        }
    }

    async payment(){
        await setTimeout(() => {
            
             return JSON.stringify({success: true})
        },3000);

        const res = JSON.stringify({success: true});
        return res;
    }
}
