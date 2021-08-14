import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { ServerResponse } from 'src/app/models/ServerResponse.model';
import { ProductModelServer } from 'src/app/models/product.model';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products : ProductModelServer[] = [];

  constructor(private productService: ProductService,
              private cartService : CartService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe( (prods : ServerResponse)=>{
      this.products = prods.products;
      console.log(this.products);
      
    })
  }
  AddToProduct(id:number){
    this.cartService.AddProductToCart(id);
  }
}
