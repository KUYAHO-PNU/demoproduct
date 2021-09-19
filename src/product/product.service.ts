import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateProductRes } from 'src/dto/UpdateProductRes.dto';
import { MongoRepository, ObjectID } from 'typeorm';
import { MONGODB_PROVIDER } from '../config/constants';
import { CreateNewProductRes } from '../dto/CreateNewProductRes.dto';
import { ProductEntity } from '../entities/product.entity';
import { Product, ProductDocument } from '../schemas/product.schemas';

@Injectable()
export class ProductService {
  constructor(
    /* Schema Model을 생성하고 삽입해줍니다. */
    @InjectRepository(ProductEntity)
    private readonly productRepository: MongoRepository<ProductEntity>,
  ) {}
  /*
   *product 생성 매서드
   */
  async create(createdProduct: CreateNewProductRes): Promise<Product> {
    const new_data = new Product();
    new_data.name = createdProduct.name;
    new_data.category = createdProduct.category;
    new_data.description = createdProduct.description;
    new_data.detailInfo = createdProduct.detailInfo;
    new_data.price = createdProduct.price;
    new_data.product_id = createdProduct.product_id;
    new_data.seller_id = createdProduct.seller_id;

    return this.productRepository.save(new_data);
  }

  /*
   * product 조회 매서드
   * 1. findAll() : 전체조회
   * 2. findById() : id로 상품 개별조회
   */

  async findAll(): Promise<Product[]> {
    const data = await this.productRepository.find({ cache: true });
    if (data) {
      console.log(data);
      return data;
    } else throw Error;
    return data;
  }

  async findById(id: string): Promise<Product> {
    return await this.productRepository.findOne({ id });
  }

  /*
   * product 수정매서드
   * 1. update() : 상품 수정
   */
  async update(
    id: string,
    updateProductInfo: UpdateProductRes,
  ): Promise<boolean> {
    const { price, quantity, description, detailInfo } = updateProductInfo;
    const product = await this.productRepository
      .findOne({ id })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // if (product) {
    //   product.price = price;
    //   product.quantity = quantity;
    //   product.description = description;
    //   product.detailInfo = detailInfo;
    //   console.log(product);
    // } else return false;
    //await this.productRepository.save(product))
    console.log(product);
    return false;
  }

  /*
   * product 삭제 메서드
   * 1. deleteById() :상품개별삭제, Id로 개별삭제
   * 2. deleteAll() : 상품전체삭제
   * */

  async deleteById(id: string): Promise<boolean> {
    const product = await this.productRepository.findOne({ id });
    return (await this.productRepository.remove(product)) ? true : false;
  }

  async deleteAll(): Promise<boolean> {
    return (await this.productRepository.deleteMany({})) ? true : false;
  }
}
