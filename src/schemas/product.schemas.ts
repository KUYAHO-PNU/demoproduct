import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  product_id: number;

  @Prop({ required: true })
  seller_id: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  detailInfo: string;

  // @Prop({ required: true })
  // thumnail: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
