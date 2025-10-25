import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';
import { CreateProductDTO, UpdateProductDTO } from '../dtos/ProductDTO';

const productService = new ProductService();

export class ProductController {
  async getAllProducts(req: Request, res: Response) {
    try {
      const products = await productService.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async getProductById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const product = await productService.getProductById(id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async createProduct(req: Request, res: Response) {
    try {
      const data: CreateProductDTO = req.body;
      console.log('Creating product with data:', data);
      const product = await productService.createProduct(data);
      res.status(201).json(product);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(400).json({ error: 'Invalid data' });
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const data: UpdateProductDTO = req.body;
      const product = await productService.updateProduct(id, data);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      res.status(400).json({ error: 'Invalid data' });
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const deleted = await productService.deleteProduct(id);
      if (!deleted) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}