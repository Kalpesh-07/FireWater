import { Repository, EntityRepository } from "typeorm";
import { Categories } from "./categories.entity";

@EntityRepository(Categories)
export class CategoriesRepository extends Repository<Categories>{

}