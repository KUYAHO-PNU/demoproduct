import { ProductProps } from 'src/interfaces/product.interface';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'product' })
export class ProductEntity implements ProductProps {
  @ObjectIdColumn()
  id: string;

  @Column()
  product_id: number;

  @Column({ type: 'int' })
  seller_id: number;

  @Column({ type: 'char' })
  name: string;

  @Column({ type: 'char' })
  price: string;

  @Column({ type: 'char' })
  category: string;

  @Column({ type: 'char' })
  thumnail: string;

  @Column({ type: 'char' })
  detailInfo: string;

  @Column({ type: 'char' })
  description: string;

  @Column({ type: 'int' })
  quantity: number;
}
