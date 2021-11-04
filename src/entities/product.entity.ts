import { 
  BaseEntity, 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  OneToOne, 
  JoinColumn
} from 'typeorm';
import { CategoryEntity } from './category.entity';

@Entity('product')
export class ProductsEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  url_image: string;

  @Column()
  price: number;

  @Column()
  discount: number;
  
  @OneToOne(() => CategoryEntity, (category) => category.name)
  @JoinColumn({name: 'category'})
  category: CategoryEntity;
}