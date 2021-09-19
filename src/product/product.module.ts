import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongoDbModule } from '../config/mongodb.module';
import { ProductEntity } from '../entities/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity]), MongoDbModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
