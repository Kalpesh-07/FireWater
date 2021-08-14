import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { ProductModelServer } from 'src/app/models/product.model';
import { ServerResponse } from 'src/app/models/ServerResponse.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  category;
  products : ProductModelServer[] = [];

  constructor(private productService : ProductService,
              private route : ActivatedRoute,
              private cartService : CartService,
              private router : Router) { }

  ngOnInit(): void {
   this.route.params.subscribe( params =>{
    
    console.log(params);
    
    this.productService.getProductFromCategory(params['cat']).subscribe((prods:ServerResponse) =>{
      console.log(prods.products);
      this.products = prods.products;
      this.category = params['cat'];
      });
   });
   
   
    
  }

  AddToCart(id : number){
    this.cartService.AddProductToCart(id);
  }
  onSelectcat(category : string){
    
    
    this.router.navigate(['/product',`${category}`]);
  }
}
