import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsEntity } from '../entities/product.entity';
import { CategoryEntity } from '../entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsEntity) private readonly productRepository: Repository<ProductsEntity>,
  ) {}

  async findAll(): Promise<ProductsEntity[]> {
    return await this.productRepository
    .createQueryBuilder('p')
    .leftJoinAndSelect('p.category', 'pt')
    .getMany();
  }

  async getProductByCategory(category: string): Promise<ProductsEntity[]> {
    return await this.productRepository
    .createQueryBuilder('p')
    .leftJoinAndSelect("p.category", "category")
    .where("category.name = :name", { name: category })
    .getMany();
  }

}
