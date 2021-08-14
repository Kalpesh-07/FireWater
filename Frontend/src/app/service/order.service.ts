import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  products : ProductResponseModel[] = [];
  ServerURL = environment.SERVER_URL;

  constructor(private http : HttpClient) { }

  
  getSingleOrder(orderId: number) {
    return this.http.get<ProductResponseModel[]>(this.ServerURL + '/orders/' + orderId).toPromise();
  }
}

interface ProductResponseModel {
  id: number;
  title: string;
  description: string;
  price: number;
  quantityOrdered: number;
  image: number;
}