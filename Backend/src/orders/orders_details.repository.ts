import { Repository, EntityRepository } from "typeorm";
import { Orders_Details } from "./orders_details.entity";

@EntityRepository(Orders_Details)
export class OrdersDetailsRepository extends Repository<Orders_Details>{

}