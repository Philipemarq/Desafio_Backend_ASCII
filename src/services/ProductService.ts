import { Product } from '../models/Product';
import { CreateProductDTO, UpdateProductDTO, ProductResponseDTO } from '../dtos/ProductDTO';

export class ProductService {
  async getAllProducts(): Promise<ProductResponseDTO[]> {
    const products = await Product.findAll();
    return products.map(product => ({
      id: product.id,
      name: product.name,
      price: product.price as number,
      category: product.category,
    }));
  }

  async getProductById(id: number): Promise<ProductResponseDTO | null> {
    const product = await Product.findByPk(id);
    if (!product) return null;
    return {
      id: product.id,
      name: product.name,
      price: product.price as number,
      category: product.category,
    };
  }

  async createProduct(data: CreateProductDTO): Promise<ProductResponseDTO> {
    const product = await Product.create(data as any);
    return {
      id: product.id,
      name: product.name,
      price: product.price as number,
      category: product.category,
    };
  }

  async updateProduct(id: number, data: UpdateProductDTO): Promise<ProductResponseDTO | null> {
    const product = await Product.findByPk(id);
    if (!product) return null;
    await product.update(data);
    return {
      id: product.id,
      name: product.name,
      price: product.price as number,
      category: product.category,
    };
  }

  async deleteProduct(id: number): Promise<boolean> {
    const product = await Product.findByPk(id);
    if (!product) return false;
    await product.destroy();
    return true;
  }
}