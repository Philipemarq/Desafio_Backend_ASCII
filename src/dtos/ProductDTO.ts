export interface CreateProductDTO {
  name: string;
  price: number;
  category: string;
}

export interface UpdateProductDTO {
  name?: string;
  price?: number;
  category?: string;
}

export interface ProductResponseDTO {
  id: number;
  name: string;
  price: number;
  category: string;
}