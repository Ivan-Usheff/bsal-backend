import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { CategoryModule } from './category/category.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
        port: 3306,
        username: 'bsale_test',
        password: 'bsale_test',
        database: 'bsale_test',
        entities: ["dist/**/*.entity.js"],
        synchronize: false,
        logging: false,
      })
    }),
    ProductsModule,
    CategoryModule,
  ],
  controllers: [
    AppController, 
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}


//        type: 'mysql',
//        host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
//        port: 3306,
//        username: 'bsale_test',
//        password: 'bsale_test',
//        database: 'bsale_test',
//        entities: ["dist/**/*.entity.js"],
//        synchronize: false,
//        logging: false,