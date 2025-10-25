import { CreateProductDTO, UpdateProductDTO, ProductResponseDTO } from '../dtos/ProductDTO';
export declare class ProductService {
    getAllProducts(): Promise<ProductResponseDTO[]>;
    getProductById(id: number): Promise<ProductResponseDTO | null>;
    createProduct(data: CreateProductDTO): Promise<ProductResponseDTO>;
    updateProduct(id: number, data: UpdateProductDTO): Promise<ProductResponseDTO | null>;
    deleteProduct(id: number): Promise<boolean>;
}
//# sourceMappingURL=ProductService.d.ts.map