
import { Products } from "src/products/products.entity";

         
export class PlacedResponse{
    message : string;
    success : boolean;
    order_id : number;
    products : [ { incart: number, id: number }];
}