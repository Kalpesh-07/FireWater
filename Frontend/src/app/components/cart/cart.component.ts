import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CartModelServer } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartData: CartModelServer;
  cartTotal: number;
  subTotal : number;
  constructor(public cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.cartTotal$.subscribe(total =>{this.cartTotal = total});
    this.cartService.cartDataobs$.subscribe((data:CartModelServer)=>{this.cartData = data});
  }

  ChangeQuantity(id: Number, increaseQuantity: Boolean) {
    this.cartService.UpdateCartData(id, increaseQuantity);
  }

}
