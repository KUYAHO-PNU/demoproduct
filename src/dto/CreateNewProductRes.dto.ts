import { IsBoolean, IsNumber, IsString, IsDate } from 'class-validator';
import { ProductProps } from 'src/interfaces/product.interface';

export class CreateNewProductRes implements ProductProps {
  @IsString()
  id: string;

  @IsNumber()
  product_id: number;

  @IsNumber()
  seller_id: number;

  @IsString()
  name: string;

  @IsString()
  price: string;

  @IsString()
  category: string;

  @IsString()
  description: string;

  @IsString()
  detailInfo: string;

  @IsNumber()
  quantity: number;

  @IsString()
  thumnail: string;
}
