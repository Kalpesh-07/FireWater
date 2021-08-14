import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { ProductModelServer } from 'src/app/models/product.model';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {
  ngOnInit(): void {
  }
  message: string;
  orderId: number;
  products: ProductModelServer[];
  dummy_products : ProductResponseModel[]= [];
  cartTotal;
  constructor(private router: Router,
  private orderService: OrderService,
  private productService : ProductService) {
  
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      message: string,
      products: ProductResponseModel[],
      orderId: number,
      total: number
    };
    

    console.log(state);
    state.products.forEach(async(p) =>{
      console.log(p);
      const quantity = p['incart'];
      console.log(quantity);
      
      await this.productService.getSingleProduct(p.id).subscribe(res =>{
          const product: ProductResponseModel = {
            id: res.id,
            title: res.name,
            description: res.description,
            price: res.price,
            quantityOrdered: quantity,
            image: res.image,
          }

          this.dummy_products.push(product);

      });
      
    })
  
    this.message = state.message;
    this.orderId = state.orderId;
    console.log(this.dummy_products);
    
    this.cartTotal = state.total;
  
  
  
  
  
  }

}




// @ts-ignore


interface ProductResponseModel {
id: number;
title: string;
description: string;
price: number;
quantityOrdered: number;
image: string;
}

