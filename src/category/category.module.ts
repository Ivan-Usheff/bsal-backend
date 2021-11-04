import { Module } from '@nestjs/common';
import { CategoryEntity } from '../entities/category.entity';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}
