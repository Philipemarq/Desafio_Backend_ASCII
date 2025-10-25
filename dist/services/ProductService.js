"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const Product_1 = require("../models/Product");
class ProductService {
    async getAllProducts() {
        const products = await Product_1.Product.findAll();
        return products.map(product => ({
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
        }));
    }
    async getProductById(id) {
        const product = await Product_1.Product.findByPk(id);
        if (!product)
            return null;
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
        };
    }
    async createProduct(data) {
        const product = await Product_1.Product.create(data);
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
        };
    }
    async updateProduct(id, data) {
        const product = await Product_1.Product.findByPk(id);
        if (!product)
            return null;
        await product.update(data);
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
        };
    }
    async deleteProduct(id) {
        const product = await Product_1.Product.findByPk(id);
        if (!product)
            return false;
        await product.destroy();
        return true;
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map