import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { uri } from './config/mongodb.provider';
import { ProductEntity } from './entities/product.entity';

import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: uri,
      entities: [ProductEntity],
      // entities: [__dirname + '/**/*.entity.ts'],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
    }),
    forwardRef(() => ProductModule),
  ],
})
export class AppModule {}
