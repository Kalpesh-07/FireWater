import { Injectable } from '@angular/core';
import { ProductModelServer, ServerResponse } from '../models/product.model';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private ServerUrl = environment.SERVER_URL;
  
  constructor(private http : HttpClient){ }


  getAllProducts(numberofresult=75): Observable<ServerResponse>{
    return this.http.get<ServerResponse>(this.ServerUrl + '/products/',{
      params:{
        limit:numberofresult.toString()
      }
    })
  }

  getSingleProduct(id:number):Observable<ProductModelServer>{
    return this.http.get<ProductModelServer>(this.ServerUrl + '/products/' + id);
  }

  getProductFromCategory(catname : string):Observable<ServerResponse>{
    return this.http.get<ServerResponse>(this.ServerUrl + '/products/category/' + catname);
    
  }
}
