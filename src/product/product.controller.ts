import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateNewProductRes } from '../dto/CreateNewProductRes.dto';
import { ProductService } from './product.service';
import { Product } from '../schemas/product.schemas';
import { UpdateProductRes } from 'src/dto/UpdateProductRes.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('/post')
  async create(@Body() createProduct: CreateNewProductRes) {
    return this.productService.create(createProduct);
  }

  @Get('/:id')
  async findById(@Param('id') id: string): Promise<Product> {
    return this.productService.findById(id);
  }

  // @Get('/findAll')
  // async findAll(): Promise<string> {
  //   // const dummy = [
  //   //   {
  //   //     id: 'adfdafdsf',
  //   //     name: 'adf',
  //   //     price: 'adf',
  //   //     quantity: 0,
  //   //     product_id: 1,
  //   //     seller_id: 0,
  //   //     description: 'adf',
  //   //     detailInfo: 'adf',
  //   //     category: 'adfdafsdf',
  //   //   },
  //   // ];
  //   // if (await this.productService.findAll()) {
  //   //   return dummy;
  //   // }
  //   // //  return this.productService.findAll();
  //   return 'findAll';
  // }

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProduct: UpdateProductRes,
  ): Promise<boolean> {
    console.log(id, updateProduct);
    return this.productService.update(id, updateProduct);
  }
}
