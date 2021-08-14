import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import { Products } from 'src/products/products.entity';
import { Categories } from 'src/products/categories.entity';
import { Orders_Details } from 'src/orders/orders_details.entity';
import { Orders } from 'src/orders/orders.entity';
import { User } from 'src/auth/user.entity';

export const typeOrmConfig : TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Kpmysql1412*',   
    database: 'FireWater',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
};