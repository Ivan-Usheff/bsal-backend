import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsEntity } from '../entities/product.entity';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
    imports: [TypeOrmModule.forFeature([ProductsEntity])],
    providers: [ProductsService],
    controllers: [ProductsController],
    exports: [ProductsService],
})
export class ProductsModule {
}
