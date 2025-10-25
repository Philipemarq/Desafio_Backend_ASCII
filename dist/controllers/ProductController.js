"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const ProductService_1 = require("../services/ProductService");
const productService = new ProductService_1.ProductService();
class ProductController {
    async getAllProducts(req, res) {
        try {
            const products = await productService.getAllProducts();
            res.json(products);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    async getProductById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const product = await productService.getProductById(id);
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            res.json(product);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    async createProduct(req, res) {
        try {
            const data = req.body;
            console.log('Creating product with data:', data);
            const product = await productService.createProduct(data);
            res.status(201).json(product);
        }
        catch (error) {
            console.error('Error creating product:', error);
            res.status(400).json({ error: 'Invalid data' });
        }
    }
    async updateProduct(req, res) {
        try {
            const id = parseInt(req.params.id);
            const data = req.body;
            const product = await productService.updateProduct(id, data);
            if (!product) {
                return res.status(404).json({ error: 'Product not found' });
            }
            res.json(product);
        }
        catch (error) {
            res.status(400).json({ error: 'Invalid data' });
        }
    }
    async deleteProduct(req, res) {
        try {
            const id = parseInt(req.params.id);
            const deleted = await productService.deleteProduct(id);
            if (!deleted) {
                return res.status(404).json({ error: 'Product not found' });
            }
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map